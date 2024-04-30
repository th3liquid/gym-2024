import styled from "styled-components";
import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { DataTable } from "../components/DataTable";
import { height } from "@mui/system";
import { CrearCliente } from "./crear-cliente/CrearCliente";
import { Button } from "@mui/material";



export function Clientes({usuarios, setUsuarios}) {

  const [isModalOpen, setIsModalOpen] = React.useState(false)

  const rows  = [
    {id: 1, col1: 'Hello', col2: 'World'},
    {id: 2, col1: 'Hola', col2: 'World'},
    {id: 3, col1: 'Culito', col2: 'World'},

  ];

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
      <h1>Clientes</h1>
      <div className="rect-base">
        <Button variant="contained"onClick={() => setIsModalOpen(true)}>Añador Cliente</Button>
      </div>

      {/* Modal */}
        <CrearCliente isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      <div className="contenedor-principal">
      <DataTable rows={usuarios} columns={columns} loading={!usuarios.length} sx={{ overflowX: 'scroll' }}  />

      </div>
    </Container>
  );
}
const Container = styled.div`

padding:5%;
 height:100vh;
 .contenedor-principal{
  background-color: white;
  padding: 30px;
 }

 @media (max-width: 600px){
  
  .contenedor-principal{
    max-width: 300px;
  
  
    
  }
 }


 
 `;
