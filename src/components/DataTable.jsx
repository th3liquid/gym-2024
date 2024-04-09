import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import React from 'react'

export const DataTable = ({rows, columns, loading, sx}) => {
  return (
    <>
    <DataGrid 
        rows={rows} 
        columns={columns} 
        loading={loading} 
        sx={sx} 
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
         />
    </>
  )
}
