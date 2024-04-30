import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai';
import { TomarFoto } from '../../components/TomarFoto';

export const CrearCliente = ({isOpen, closeModal}) => {
  if(!isOpen) return null;


  // Formulario
  const [email, setEmail] = useState('')
  const [apellido, setApellido] = useState('')
  const [nombre, setNombre] = useState('')
  const [sexo, setSexo] = useState('')
  const [domicilio, setDomicilio] = useState('')
  const [membresia, setMembresia] = useState('')
  const [error, setError] = useState({
  
    error: false,
    message: ""
  })
  // Formulario



  const handleSubmit = e => {
    e.preventDefault()
    console.log(email);
  }


  return (
    <div className='modal'>
      <AiOutlineClose className='close-btn' size={30} color='#fff' cursor={'pointer'} onClick={closeModal} />
      <div className="container">
        <Typography variant='h1'>Registrar Cliente</Typography>
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
            <TextField id='apellido'
                        label='Apellido'
                        required
                        type='text'
                        variant='outlined'
                        fullWidth
                        error={error.error}
                        helperText={error.message}
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        sx={{mb: 1}}  />
              <TextField id='email'
                        label='Email'
                        required
                        type='email'
                        variant='outlined'
                        fullWidth
                        error={error.error}
                        helperText={error.message}
                        value={email}
                        sx={{mb: 1}}
                        onChange={(e) => setEmail(e.target.value)}  />

            </div>

                    <div style={{width: '100%'}}>

                      <TextField id='domicilio'
                                label='Domicilio'
                                required
                                type='text'
                                variant='outlined'
                                fullWidth
                                error={error.error}
                                helperText={error.message}
                                value={domicilio}
                                sx={{mb: 1}}
                                onChange={(e) => setEmail(e.target.value)}  />
                      <TextField id='sexo'
                                label='Sexo'
                                required
                                select
                                variant='outlined'
                                fullWidth
                                error={error.error}
                                helperText={error.message}
                                value={sexo}
                                sx={{mb: 1}}
                                onChange={(e) => setSexo(e.target.value)}  >
                                  <MenuItem value="hombre">Hombre</MenuItem>
                                  <MenuItem value="mujer">Mujer</MenuItem>
                                </TextField>
                      <TextField id='membresia'
                                label='Membresia'
                                required
                                select
                                variant='outlined'
                                fullWidth
                                error={error.error}
                                helperText={error.message}
                                value={membresia}
                                sx={{mb: 1}}
                                onChange={(e) => setMembresia(e.target.value)}  >
                                  <MenuItem value="mensual">Mensual</MenuItem>
                                  <MenuItem value="trimestral">Trimestreal</MenuItem>
                                  <MenuItem value="anual">Anual</MenuItem>
                                </TextField>
                          <TomarFoto />
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
