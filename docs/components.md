# IDM UI Package Components

## Button
---
**Description:**
Material-UI Button wrapper. Supports all MUI Button props.

```tsx
<Button variant="contained" color="primary">Click Me</Button>
```

---
## Table

**Description:**
Material-UI TextField supporting all input types, label, placeholder, and icon.

**Props:**
- All [MUI TextField props](https://mui.com/material-ui/api/text-field/)
- `type?: string` — Input type (text, password, email, etc.)
- `label?: string` — Input label
- `placeholder?: string` — Input placeholder
- `icon?: keyof typeof Icons` — Icon name from MUI icons
- `iconPosition?: 'start' | 'end'` — Icon position
- `onIconClick?: () => void` — Icon click handler

**Example:**
```tsx
<Input label="Name" placeholder="Enter name" />
<Input type="password" label="Password" />
<Input icon="Search" label="Search" />
<Input icon="Visibility" iconPosition="end" onIconClick={handler} />
```
**Description:**
Material-UI DataGrid wrapper. Supports sorting, search, pagination.

**Props:**

---
## Dropdown
**Description:**
Material-UI Select supporting single and multi-select.

**Props:**
- `label?: string` — Dropdown label
- `options: { label: string; value: string }[]` — Options list
- `value: string | string[]` — Selected value(s)
- `multiple?: boolean` — Enable multi-select
- `onChange: (value: string | string[]) => void` — Change handler
- All [MUI Select props](https://mui.com/material-ui/api/select/)

**Example:**
```tsx
<Dropdown label="Select" options={[{label: 'A', value: 'a'}]} value="a" onChange={handler} />
<Dropdown label="Multi" options={[{label: 'A', value: 'a'}]} value={["a"]} multiple onChange={handler} />
```
- `columns: GridColDef[]` — Table columns ([MUI DataGrid columns](https://mui.com/x/api/data-grid/grid-col-def/))
- `rows: any[]` — Table data
- `pageSizeOptions?: number[]` — Pagination options
- `initialPageSize?: number` — Initial page size
- `autoHeight?: boolean` — Auto height

**Example:**
```tsx
<Table columns={columns} rows={rows} pageSizeOptions={[5,10,25]} />
```

---
## Toast
**Description:**
Toast notifications using react-toastify.

**Props:**
- No props. Use `<Toast />` and `showToast('message')`.

**Example:**
```tsx
<Toast />
showToast('Hello World');
```

---
## Graph
**Description:**
Line chart using recharts.

**Props:**
- `data: Array<Record<string, any>>` — Chart data
- `xKey: string` — X axis key
- `lineKey: string` — Line data key
- `lineColor?: string` — Line color

**Example:**
```tsx
<Graph data={data} xKey="name" lineKey="value" />
```

---
## Input
**Description:**
Material-UI TextField with icon support.

**Props:**
- All [MUI TextField props](https://mui.com/material-ui/api/text-field/)
- `icon?: keyof typeof Icons` — Icon name from MUI icons
- `iconPosition?: 'start' | 'end'` — Icon position
- `onIconClick?: () => void` — Icon click handler

**Example:**
```tsx
<Input icon="Search" label="Search" />
<Input icon="Visibility" iconPosition="end" onIconClick={handler} />
```

---
## Icons
**Description:**
All MUI icons exported as `Icons`.

**Example:**
```tsx
<Icons.Search />
<Icons.Visibility />
```

---
## Theme
**Description:**
Material-UI theme wrapper.

**Props:**
- `children: React.ReactNode`

**Example:**
```tsx
<ThemeWrapper>
  <Button>Click Me</Button>
</ThemeWrapper>
```
