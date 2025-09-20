import type { Meta, StoryObj } from '@storybook/react';
import Table from '../src/components/Table';

/**
 * Table component wraps MUI DataGrid. Supports sorting, search, pagination.
 *
 * **Props:**
 * - `columns`: GridColDef[]
 * - `rows`: any[]
 * - `pageSizeOptions`: number[]
 * - `initialPageSize`: number
 * - `autoHeight`: boolean
 * - `headerColor`: string
 *
 * **Usage:**
 * ```tsx
 * <Table columns={columns} rows={rows} pageSizeOptions={[5,10,25]} />
 * ```
 */
const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Material-UI DataGrid wrapper. Supports sorting, search, pagination.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Table>;

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
];
const rows = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

export const Default: Story = {
  args: {
    columns,
    rows,
    pageSizeOptions: [5, 10],
  },
};

export const HeaderColor: Story = {
  args: {
    columns,
    rows,
    headerColor: '#1976d2',
  },
};

export const CustomCSS: Story = {
  args: {
    columns,
    rows,
    sx: { borderRadius: 10, background: '#e3f2fd' },
  },
};
