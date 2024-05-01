import { Button } from "@mui/material";
import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { useState } from "react";
import { CrearProducto } from "./crear-producto/CrearProducto";


export function Configuracion({usuarios, setUsuarios, usuariosMaster}) {

    

    const columns = [
        {field: 'id', headerName: 'User ID', width: 100},
        {field: `avatar`, headerName: 'Avatar', width: 150,  renderCell: (imagen) => (
          <img src={imagen.value} alt="Avatar" style={{ width: 50, height: 50 }} /> // Utiliza el Avatar de Mui para mostrar la imagen
        ),},
        {field: 'first_name', headerName: 'Nombre', width: 150},
        {field: 'last_name', headerName: 'Apellido', width: 150},
        {field: 'email', headerName: 'Email', width: 150},
        {
          field: 'editar',
          headerName: 'Editar',
          width: 150,
          renderCell: (params) => (
            <Button variant="contained" color="primary" onClick={() => handleEditar(params.row.id)}>
              Editar
            </Button>
          ),
        },
        {
          field: 'borrar',
          headerName: 'Borrar',
          width: 150,
          renderCell: (params) => (
            <Button color='error' variant="contained" onClick={() => handleBorrar(params.row.id)}>
              Borrar
            </Button>
          ),
        },
        
      ]
    
      const userTableStyles = {
        height: '500px',
    
        
        
    
      }
      const handleEditar = (id) => {
        // Lógica para manejar la edición del cliente con el ID proporcionado
        console.log('Editando cliente con ID:', id);
      }
      const handleBorrar = (id) => {
        // Lógica para manejar la edición del cliente con el ID proporcionado
        console.log('Editando cliente con ID:', id);
      }
 
  return (
    <Container>
      <h1>Panel Control</h1>
    
      {/* <div className="rect-base">
       
      </div> */}
      

      <div style={{display: 'flex', width: '100%', marginTop: '50px'}}>
        <div className="contenedor-principal1">
            <div className="bloque1">
                <img style={{borderRadius: '300px', width: '150px'}} src={usuariosMaster[0].image} alt="" />

            </div>
            <div className="bloque1">
                
                <h2>Usuario: <strong>{usuariosMaster[0].username}</strong></h2>

            </div>
            <div className="bloque1">
                <h2><strong>{usuariosMaster[0].nombre}</strong></h2>
            </div>
            <div className="bloque1">
                <h2>{usuariosMaster[0].email}</h2>
            </div>

        </div>
        <div className="contenedor-principal2">
            <div className="bloque2">
                <h2>Usuarios</h2>
                
            </div>
            <div className="rect-base">
               <Button color='primary' variant='contained'>Añadir usuario</Button>
               

            </div>
            <div className="bloque2">
            <DataTable rows={usuarios} columns={columns} loading={!usuarios.length} sx={{ overflowX: 'scroll' }}  />
            </div>

        </div>

      </div>

    </Container>
  );
}
const Container = styled.div`

padding:5%;
 height:100vh;
 .contenedor-principal1{
    display: block;
    align-content: center;
    
    text-align: center;
  width: 40%;
  background-color: white;
  margin-right: 20px;
  padding: 30px;
 }
 .contenedor-principal2{
  width: 100%;
  background-color: white;
  margin-right: 20px;
  padding: 30px;
 }

 .user-image  {
    background-image: url('/img/background.jpg');
    background-size: cover;
    background-position: center;
    height: 150px;
    width: 150px;
    border-radius: 100px;
 }

 .bloque1 {
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .bloque1 h2{
    color: #333 !important;
    font-weight: lighter;
 }
 .bloque2 {
    display: block;
    justify-content: center;
    align-items: center;
 }
 .bloque2 h2{
    color: #333 !important;
    font-weight: lighter;
 }

 @media (max-width: 600px){
  
  .contenedor-principal{
    max-width: 300px;
  
  
    
  }
 }


 
 `;
