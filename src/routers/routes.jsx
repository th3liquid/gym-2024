import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { Productos } from "../pages/Productos";
import {Diagramas} from "../pages/Diagramas";
import {Reportes} from "../pages/Reportes";
import { Clientes } from "../pages/Clientes";
import React, { useEffect, useState } from 'react'
import { CrearCliente } from "../pages/crear-cliente/CrearCliente";

export const MyRoutes = () => {

  const [usuarios, setUsuarios] = useState([]);

  const [productos, setProductos] = useState([])
  
  const productosEstaticos = () => {
    fetch('https://fakestoreapi.com/products/')
            .then(respuesta => respuesta.json())
            .then(productos_final => {
              setProductos(productos_final);
              console.log('Productos Cargados:', productos_final);
            })
            .catch(error => {
              console.log('Hubo un error en los productos');
            })
  }
  
  const usuariosEstaticos = () => {
    fetch('https://reqres.in/api/users?page=1')
    .then(respuesta => respuesta.json())
    .then(data_final => {
      setUsuarios(data_final.data);
      console.log('Usuarios cargados:', data_final.data);
    })
    .catch(error => {
      console.log('Hubo un error en la consulta');
    });
  }
  
  useEffect(() => {
    usuariosEstaticos();
    productosEstaticos();
  }, []);

  return (

    <Routes>
    <Route path="/" element={<Home usuarios={usuarios} setUsuarios={setUsuarios}/>} />
    <Route path="/productos" element={<Productos productos={productos} setProductos={setProductos} />} />
    <Route path="/clientes/" element={<Clientes usuarios={usuarios} setUsuarios={setUsuarios} />} />
    
    <Route path="/diagramas" element={<Diagramas />} />
    <Route path="/reportes" element={<Reportes />} />
    <Route path="/*" element={<Home />} />
  </Routes>
    
    
  )
}
