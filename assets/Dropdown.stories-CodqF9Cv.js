import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{R as u}from"./iframe-Cy3BtHJX.js";import{D as m}from"./Dropdown-DL82D2yY.js";import"./preload-helper-PPVm8Dsz.js";import"./FormControl-RLoTQKLs.js";import"./clsx-B-dksMZM.js";import"./Select-6ukRylU-.js";import"./index-CH2_c9Hu.js";import"./DefaultPropsProvider-CsrN_SUT.js";import"./index-BPJnJB5S.js";import"./useSlot-BX9yaB4H.js";import"./mergeSlotProps-CALxp62v.js";import"./useForkRef-CZt-UuRN.js";import"./useSlotProps-B6-FrUhw.js";import"./Paper-SDFH02h-.js";import"./useTheme-DUFEjrXH.js";import"./useTheme-u-s8aD64.js";import"./memoTheme-CIb5oiS3.js";import"./Grow-CbkngDUZ.js";import"./index-D1hX3Dt6.js";import"./index-CJXWDxqI.js";import"./useEventCallback-BuWK0EnD.js";import"./useTimeout-c5f7BTXS.js";import"./mergeSlotProps-D_PRovB-.js";import"./createChainedFunction-BO_9K8Jh.js";import"./List-CTPBN9uE.js";import"./useControlled-BywM8ood.js";import"./useId-BfczGoY2.js";import"./useFormControl-DuDsA8ic.js";import"./createSvgIcon-DZunnvVl.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./index-D6OIjj1W.js";import"./emotion-react.browser.esm-D3WaF_Ge.js";import"./MenuItem-P5IfX2n1.js";import"./ButtonBase-DbuH8q8u.js";import"./isFocusVisible-B8k4qzLc.js";import"./dividerClasses-BOcXNRy6.js";import"./Checkbox-_eViKPAE.js";import"./SwitchBase-_by_QxP9.js";import"./ListItemText-DOMwW1ml.js";import"./Typography-C1ZToUgw.js";const $={title:"MUI/Dropdown",component:m,tags:["autodocs"],parameters:{docs:{description:{component:"Material-UI Select supporting single and multi-select."}}}},r=[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],o={render:e=>{const[l,i]=u.useState(e.value);return p.jsx(m,{...e,value:l,onChange:i})},args:{label:"Select",options:r,value:"1"}},a={args:{label:"Primary",options:r,value:"1",onChange:()=>{},color:"primary",sx:{minWidth:200}}},t={args:{label:"Secondary",options:r,value:"2",onChange:()=>{},color:"secondary",sx:{minWidth:200}}},n={render:e=>{const[l,i]=u.useState(e.value);return p.jsx(m,{...e,value:l,onChange:i})},args:{label:"Multi",options:r,value:["1"],multiple:!0}},s={args:{label:"Styled Multi",options:r,value:["1"],multiple:!0,onChange:()=>{},sx:{background:"#fce4ec",borderRadius:10}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Select',
    options,
    value: '1'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    options,
    value: '1',
    onChange: () => {},
    color: 'primary',
    sx: {
      minWidth: 200
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Secondary',
    options,
    value: '2',
    onChange: () => {},
    color: 'secondary',
    sx: {
      minWidth: 200
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <Dropdown {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Multi',
    options,
    value: ['1'],
    multiple: true
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Styled Multi',
    options,
    value: ['1'],
    multiple: true,
    onChange: () => {},
    sx: {
      background: '#fce4ec',
      borderRadius: 10
    }
  }
}`,...s.parameters?.docs?.source}}};const ee=["SingleSelect","Primary","Secondary","MultiSelect","CustomCSS"];export{s as CustomCSS,n as MultiSelect,a as Primary,t as Secondary,o as SingleSelect,ee as __namedExportsOrder,$ as default};
