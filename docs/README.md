
# IDM UI Package Documentation

## Overview
A React component library built with Material-UI, including Button, Table (with sorting, search, pagination), Toast, Graph, Input, and theme support. All MUI icons are exported as `Icons`.

## Installation
```bash
npm install idm-ui-package
```

## Usage
```tsx
import { Button, Table, Toast, Graph, Input, Icons } from 'idm-ui-package';
import ThemeWrapper from 'idm-ui-package/src/theme/ThemeWrapper';

<ThemeWrapper>
  <Button>Click Me</Button>
  <Table columns={columns} rows={rows} />
  <Toast />
  <Graph data={data} xKey="name" lineKey="value" />
  <Input icon="Search" label="Search" />
  <Icons.Search />
</ThemeWrapper>
```

## Components
### Button
- All MUI Button props supported

### Table
- Uses MUI DataGrid
- Features: sorting, search, pagination
- Props: `columns`, `rows`, `pageSizeOptions`, `initialPageSize`, `autoHeight`

### Toast
- Uses react-toastify
- Use `<Toast />` and `showToast('message')`

### Graph
- Uses recharts LineChart
- Props: `data`, `xKey`, `lineKey`, `lineColor`

### Input
- Uses MUI TextField
- Props: All TextField props, plus `icon`, `iconPosition`, `onIconClick`

### Icons
- All MUI icons available as `Icons` export
- Example: `<Icons.Search />`

### Theme
- Use `ThemeWrapper` to apply the default theme
- Customize theme in `src/theme/index.ts`

## Testing
Run tests with:
```bash
npm test
```

## Publishing
```bash
npm publish
```

## License
MIT
