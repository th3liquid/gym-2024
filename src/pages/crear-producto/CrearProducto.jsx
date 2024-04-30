import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { TomarFoto } from '../../components/TomarFoto';

export const CrearProducto = ({ isModalOpen, setIsModalOpen}) => {









  // Formulario
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [imagen, setImagen] = useState('')
  const [sexo, setSexo] = useState('')

  const [membresia, setMembresia] = useState('')
  const [error, setError] = useState({
  
    error: false,
    message: ""
  })
  // Formulario



  const handleSubmit = e => {
    e.preventDefault();
  }


  return (
    <div className='modal'>
      <AiOutlineClose className='close-btn' size={30} color='#fff' cursor={'pointer'} onClick={() => setIsModalOpen(false)} />
      <div className="container">
        <Typography variant='h1'>Registrar Producto</Typography>
        {/* <form action="">
          <label>Nombre</label>
          <input type="nombre" placeholder='nombre' />
          <input type="submit" value='Guardar' />
        </form> */}
        <Box  sx={{mt: 2,}} component='form' onSubmit={handleSubmit}>
          <div style={{display: 'flex', width: '100%'}}>
            <div style={{width: '100%', marginRight: '10px'}}>
            <TextField id='nombre'
                        label='Nombre'
                        required
                        type='text'
                        variant='outlined'
                        fullWidth
                        error={error.error}
                        helperText={error.message}
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        sx={{mb: 1}}  />
            <TextField id='descripcion'
                        label='Descripción'
                        required
                        type='text'
                        variant='outlined'
                        fullWidth
                        error={error.error}
                        helperText={error.message}
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        sx={{mb: 1}}  />
              <TextField id='precio'
                        label='Precio'
                        required
                        type='number'
                        variant='outlined'
                        fullWidth
                        error={error.error}
                        helperText={error.message}
                        value={precio}
                        sx={{mb: 1}}
                        onChange={(e) => setPrecio(e.target.value)}  />
                      <TextField id='imagen'
                                
                                required
                                type='file'
                                variant='outlined'
                                fullWidth
                                error={error.error}
                                helperText='Carga la imagen del producto'
                                value={imagen}
                                sx={{mb: 1}}
                                onChange={(e) => setImagen(e.target.value)}  />

            </div>

                   
          </div>
                    
                    <div style={{display: 'block'}}>
          <Button  type='submit' variant='outlined' sx={{mt:2}} >Registro</Button>

                    </div>

        </Box>

      </div>
    </div>
  )
}
