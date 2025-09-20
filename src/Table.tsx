import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

export interface TableProps {
  columns: GridColDef[];
  rows: any[];
  pageSizeOptions?: number[];
  autoHeight?: boolean;
  initialPageSize?: number;
}

const Table: React.FC<TableProps> = ({ columns, rows, pageSizeOptions = [5, 10, 25], autoHeight = true, initialPageSize = 5 }) => (
  <div style={{ width: '100%' }}>
    <DataGrid
      columns={columns}
      rows={rows}
      autoHeight={autoHeight}
      pageSizeOptions={pageSizeOptions}
      initialState={{
        pagination: { paginationModel: { pageSize: initialPageSize } }
      }}
      slots={{ toolbar: GridToolbar }}
      disableRowSelectionOnClick
    />
  </div>
);

export default Table;
