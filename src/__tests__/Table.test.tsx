import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../components/Table';
import { GridColDef } from '@mui/x-data-grid';

describe('Table', () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
  ];
  const rows = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  it('renders table with rows', () => {
    render(<Table columns={columns} rows={rows} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });
});
