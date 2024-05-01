import { Button } from "@mui/material";
import styled from "styled-components";
import { DataTable } from "../components/DataTable";
import { PieChart } from '@mui/x-charts/PieChart';

import { CrearProducto } from "./crear-producto/CrearProducto";

const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];


export function Reportes() {
 

  return (
    <Container>
      <h1>Reportes</h1>
      <div className="rect-base">
        
      </div>
      {/* Modal */}

    
      <div className="contenedor-principal">
      <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
    />
     

      </div>

      <div className="contenedor-principal" style={{marginTop: '50px'}}>
        <h2 >Tabla que de Reporte de Caja</h2>
        <p>Aún no se como va ser</p>
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
