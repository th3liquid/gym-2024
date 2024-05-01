import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { Productos } from "../pages/Productos";
import {Diagramas} from "../pages/Diagramas";
import {Reportes} from "../pages/Reportes";
import { Clientes } from "../pages/Clientes";
import React, { useEffect, useState } from 'react'
import { CrearCliente } from "../pages/crear-cliente/CrearCliente";
import { Configuracion } from "../pages/Configuracion";
import { Login } from "../pages/Login";


  

export const MyRoutes = ({login, setLogin}) => {

  const [usuarios, setUsuarios] = useState([]);

  const [productos, setProductos] = useState([])


  const usuariosMaster = [
    { id: 1, username: 'th3liquid', nombre: 'Kevin Alan', email: 'th3liquid@gmail.com', image: 'https://placekitten.com/300/300' },
    { id: 2, username: 'usuario2' },
    { id: 3, username: 'usuario3' }
  ];
  
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
    <Route path="/" element={<Login login={login} setLogin={setLogin} />} />
    <Route path="/home" element={<Home usuarios={usuarios} setUsuarios={setUsuarios}/>} />
    <Route path="/productos" element={<Productos productos={productos} setProductos={setProductos} />} />
    <Route path="/clientes/" element={<Clientes usuarios={usuarios} setUsuarios={setUsuarios} />} />
    
    <Route path="/diagramas" element={<Diagramas />} />
    <Route path="/configuracion"  element={<Configuracion usuariosMaster={usuariosMaster} usuarios={usuarios} setUsuarios={setUsuarios} />} />
    <Route path="/reportes" element={<Reportes />} />
    <Route path="/login" element={<Login login={login} setLogin={setLogin} />} />
    <Route path="/*" element={<Login />} />
  </Routes>
    
    
  )
}
