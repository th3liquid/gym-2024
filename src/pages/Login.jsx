import { Box, Button, Container, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import React from 'react'

export const Login = ({login, setLogin}) => {
  return (
    <>
    <div className='loginback' >
        <div style={{padding: '20px', background: 'white', width: '20%'}}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1>Login</h1>

            </div>
        <div style={{display: 'block', marginTop: '20px'}}>
        <Box>
            <TextField 
            fullWidth
            label='Ingrese Usuario'
            type='text'
            />
            <TextField sx={{mt:1}}
            fullWidth
            label='Ingrese Password'
            type='text'
            />
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to="/">
                <Button onClick={() => setLogin(true)} size='large' sx={{mt: 3}} variant='outlined'>Ingresar</Button>
            </Link>
            </div>

        </Box>
    </div>
    

        </div>
    </div>

    </>
    
  )
}
