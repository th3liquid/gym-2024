import { useEffect, useState } from "react";
import styled from "styled-components";
import { Clock } from "../components/Clock";
import { Modal } from "../helpers/Modal";

export function Home({usuarios, setUsuarios}) {

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [nombreUsuario, setNombreUsuario] = useState('');
  const [isModalAutoClose, setIsModalAutoClose] = useState(false);
  
  // const [usuarios, setUsuarios] = useState([]);
  
  
  // const usuariosEstaticos = () => {
  //   fetch('https://reqres.in/api/users?page=1')
  //   .then(respuesta => respuesta.json())
  //   .then(data_final => {
  //     setUsuarios(data_final.data);
  //     console.log('Usuarios cargados:', data_final.data);
  //   })
  //   .catch(error => {
  //     console.log('Hubo un error en la consulta');
  //   });
  // }
  
  // useEffect(() => {
  //   usuariosEstaticos();
  // }, []);
  

  const handleOpenModal = () => {
    setIsModalAutoClose(true); // Activar el cierre automático al abrir el modal
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false); // Cierra el modal después de 4 segundos
    }, 2000); // 4000 milisegundos son 4 segundos
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const conseguirIdInput = e => {
    e.preventDefault();
    const datosInput = inputValue.trim(); // Elimina espacios en blanco al principio y al final
    
    // Busca el usuario en la lista de usuarios obtenida de la petición AJAX
    const usuarioEncontrado = usuarios.find(usuario => usuario.id.toString() === datosInput);
    
    if (usuarioEncontrado) {
      const nombreUsuario = `${usuarioEncontrado.first_name} ${usuarioEncontrado.last_name}`;
      setNombreUsuario(nombreUsuario);
      handleOpenModal(); // Abre el modal si se encontró el usuario
    } else {
      console.log('Usuario no encontrado');
    }
  }

  return (
    <>
      <Container>
        <div className="tarjetaDash">
          <h2>Bienvenido <span style={{color: '#00BFFF'}}></span></h2>
          <Clock />
          <div className="tarjetaDash2">
            <form onSubmit={conseguirIdInput} action="">
              <input
                autoFocus
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ingresa el ID a buscar"
              />
            </form>
            <Modal nombreUsuario={nombreUsuario} isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </div>
      </Container>
    </>
  );
}
const Container =styled.div`

  background-image: url('/src/assets/img/background.jpg');  /* Reemplaza 'ruta/de/la/imagen.jpg' con la ruta de tu imagen */
  background-size: cover; /* Ajusta la imagen para cubrir todo el fondo */
  background-position: center; /* Centra la imagen en el fondo */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  
  align-content: center;
  height:100vh;
  .tarjetaDash{
    margin: 30%;
  
    display: block;
    justify-content: center;
    align-items: center;
    padding: 50px;
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
form select,
form textarea{
  display: block;
  margin: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left:10px;
  padding-right: 10px;
  min-width: 250px;
  

}

@media (max-width: 390px){
  
  .tarjetaDash{
    margin: 5%;
  
  
    
}
}

 

`