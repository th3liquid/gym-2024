import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const CrearProducto = ({ setIsModalOpen, setProductos }) => {
  const [formData, setFormData] = useState({
    id: '',
    category: '',
    image: '',
    title: '',
    description: '',
    price: ''
  });

  const capturarForm = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const guardarAPI = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta de la API:', data);
        actualizarProductos();
      } else {
        console.error('Error al hacer la solicitud POST');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud POST:', error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    guardarAPI();
  };

  const actualizarProductos = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/');
      if (response.ok) {
        const data = await response.json();
        setProductos(data);
        console.log('Productos actualizados:', data);
      } else {
        console.error('Error al obtener la lista actualizada de productos');
      }
    } catch (error) {
      console.error('Error al obtener la lista actualizada de productos:', error);
    }
  };

  return (
    <div className='modal'>
      <AiOutlineClose
        className='close-btn'
        size={30}
        color='#fff'
        cursor={'pointer'}
        onClick={() => setIsModalOpen(false)}
      />
      <div className="container">
        <Typography variant='h1'>Registrar Producto</Typography>
        <Box sx={{ mt: 2 }} component='form' onSubmit={handleSubmit}>
          <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ width: '100%', marginRight: '10px' }}>
              <TextField
                id='title'
                name='title'
                label='Nombre'
                required
                type='text'
                variant='outlined'
                fullWidth
                value={formData.title}
                onChange={capturarForm}
                sx={{ mb: 1 }}
              />
              <TextField
                id='description'
                name='description'
                label='Descripción'
                required
                type='text'
                variant='outlined'
                fullWidth
                value={formData.description}
                onChange={capturarForm}
                sx={{ mb: 1 }}
              />
              <TextField
                id='category'
                name='category'
                label='Categoría'
                required
                type='text'
                variant='outlined'
                fullWidth
                value={formData.category}
                onChange={capturarForm}
                sx={{ mb: 1 }}
              />
              <TextField
                id='price'
                name='price'
                label='Precio'
                required
                type='number'
                variant='outlined'
                fullWidth
                value={formData.price}
                onChange={capturarForm}
                sx={{ mb: 1 }}
              />
              <TextField
                id='image'
                name='image'
                
                required
                type='file'
                variant='outlined'
                fullWidth
                value={formData.image}
                onChange={capturarForm}
                sx={{ mb: 1 }}
              />
            </div>
          </div>
          <div style={{ display: 'block' }}>
            <Button type='submit' variant='outlined' sx={{ mt: 2 }}>Registro</Button>
          </div>
        </Box>
      </div>
    </div>
  );
};
