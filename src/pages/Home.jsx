import { useEffect, useState } from "react";
import styled from "styled-components";
import { Clock } from "../components/Clock";
import { Modal } from "../helpers/Modal";
import { AiFillCaretRight } from "react-icons/ai";

export function Home({usuarios, setUsuarios}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const conseguirIdInput = e => {
    e.preventDefault();
    const datosInput = inputValue.trim();
    const usuarioEncontrado = usuarios.find(usuario => usuario.id.toString() === datosInput);
    
    if (usuarioEncontrado) {
      const nombreUsuario = `${usuarioEncontrado.first_name} ${usuarioEncontrado.last_name}`;
      setNombreUsuario(nombreUsuario);
      setUsuarioEncontrado(true);
    } else {
      setUsuarioEncontrado(false);
    }
    handleOpenModal();
  };

  return (
    <>
      <Container>
        <div className="tarjetaDash">
          <h2>Bienvenido <span style={{color: '#00BFFF'}}></span></h2>
          <Clock />
          <h1>ID: {inputValue}</h1>
          <div className="tarjetaDash2">
            <form onSubmit={conseguirIdInput} action="">
              <input
                autoFocus
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingresa el ID a buscar"
              />
              <button type='submit'>Enviar<AiFillCaretRight /></button>
            </form>
            <Modal
              nombreUsuario={nombreUsuario}
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              usuarios={usuarios}
              usuarioEncontrado={usuarioEncontrado}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
const Container =styled.div`

  background-image: url('/img/background.jpg');  /* Reemplaza 'ruta/de/la/imagen.jpg' con la ruta de tu imagen */
  background-size: cover; /* Ajusta la imagen para cubrir todo el fondo */
  background-position: center; /* Centra la imagen en el fondo */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  
  align-content: center;
  height:100vh;

  form {
    display: flex;
    align-items: center;
    
  }

  button {
    
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tarjetaDash{
    
    margin: auto;
    max-width: 400px;
    display: block;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background: ${(props) => props.theme.bg2};
    text-align: center;
    border-radius: 10px;
    
}
.tarjetaDash2{
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    
    
}



form input[type='text'],
form input[type='submit'],
form button{
  display: flex;
  margin: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left:10px;
  padding-right: 10px;
  min-width: 100px;
  max-width: 200px;
  

}
.reloj-titulo {
  font-size: 40px;
}

.reloj-titulo-light{
  font-weight: 100;
  font-size: 50px;
}


@media (max-width: 600px){
  
  .tarjetaDash{
    margin: 5%;
  
  
    
}
.reloj-titulo {
  font-size: 20px;
}

.reloj-titulo-light{
  font-weight: 100;
  font-size: 30px;
}

}

 

`