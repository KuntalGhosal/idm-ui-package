import * as React from 'react';
import { DataGrid, GridColDef, GridToolbar, DataGridProps } from '@mui/x-data-grid';

export interface TableProps extends Omit<DataGridProps, 'columns' | 'rows'> {
  columns: GridColDef[];
  rows: any[];
  pageSizeOptions?: number[];
  autoHeight?: boolean;
  initialPageSize?: number;
  headerColor?: string;
  sx?: object;
}

const Table: React.FC<TableProps> = ({ columns, rows, pageSizeOptions = [5, 10, 25], autoHeight = true, initialPageSize = 5, headerColor, sx, ...props }) => (
  <div style={{ width: '100%' }}>
    <DataGrid
      columns={columns.map(col => headerColor ? { ...col, headerClassName: 'custom-header' } : col)}
      rows={rows}
      autoHeight={autoHeight}
      pageSizeOptions={pageSizeOptions}
      initialState={{
        pagination: { paginationModel: { pageSize: initialPageSize } }
      }}
      slots={{ toolbar: GridToolbar }}
      disableRowSelectionOnClick
      sx={sx}
      {...props}
    />
    {headerColor && <style>{`.custom-header { background-color: ${headerColor} !important; }`}</style>}
  </div>
);

export default Table;
