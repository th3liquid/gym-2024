import { Button } from "@mui/material";
import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { useState } from "react";
import { CrearProducto } from "./crear-producto/CrearProducto";


export function Productos({productos, setProductos}) {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const columns = [
    {field: 'id', headerName: 'Product ID', width: 100},
    {field: 'image', headerName: 'Imagen', width: 150,  renderCell: (imagen) => (
      <img src={imagen.value} alt="Avatar" style={{ width: 50, height: 50 }} /> // Utiliza el Avatar de Mui para mostrar la imagen
    ),},
    {field: 'title', headerName: 'Nombre', width: 150},
    {field: 'description', headerName: 'Descripción', width: 150},
    {field: 'price', headerName: 'Precio', width: 150},
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
      <h1>Productos</h1>
      <div className="rect-base">
        <Button onClick={() => setIsModalOpen(true)} variant="contained">Añadir Producto</Button>
      </div>
      {/* Modal */}

      {isModalOpen ? (
        
        <CrearProducto setIsModalOpen={setIsModalOpen} />
      ): ''}
      
      <div className="contenedor-principal">
      <DataTable rows={productos} columns={columns} loading={!productos.length} sx={{ overflowX: 'scroll' }}  /> 

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
