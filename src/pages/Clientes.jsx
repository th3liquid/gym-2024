import styled from "styled-components";
import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { DataTable } from "../components/DataTable";
import { height } from "@mui/system";



export function Clientes({usuarios, setUsuarios}) {

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
    
  ]

  const userTableStyles = {
    height: '500px',

  }

  console.log('usuarios Clientes:',usuarios);
  return (
    <Container>
      <h1>Clientes</h1>
      <div className="contenedor-principal">
      <DataTable rows={usuarios} columns={columns} loading={!usuarios.length} sx={userTableStyles}  />

      </div>
    </Container>
  );
}
const Container = styled.div`

padding:50px;
 height:100vh;
 .contenedor-principal{
  background-color: white;
  padding: 30px;
 }
 
 `;
