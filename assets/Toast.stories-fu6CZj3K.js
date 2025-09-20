import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as e,s as n}from"./Toast-l2myrOsd.js";import"./iframe-Cy3BtHJX.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";const l={title:"Components/Toast",component:e,tags:["autodocs"],argTypes:{position:{control:"select",options:["top-left","top-right","top-center","bottom-left","bottom-right","bottom-center"]},autoClose:{control:"number"},theme:{control:"select",options:["light","dark","colored"]},newestOnTop:{control:"boolean"},closeOnClick:{control:"boolean"},pauseOnHover:{control:"boolean"},draggable:{control:"boolean"}}},s={render:o=>t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>n("Success Toast!","success",{...o,position:o.position}),children:"Show Success"}),t.jsx("button",{onClick:()=>n("Error Toast!","error",{...o,position:o.position}),children:"Show Error"}),t.jsx("button",{onClick:()=>n("Info Toast!","info",{...o,position:o.position}),children:"Show Info"}),t.jsx("button",{onClick:()=>n("Warning Toast!","warning",{...o,position:o.position}),children:"Show Warning"}),t.jsx(e,{...o})]}),args:{position:"top-right",autoClose:3e3,theme:"light",newestOnTop:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <button onClick={() => showToastWithType('Success Toast!', 'success', {
      ...args,
      position: args.position
    })}>Show Success</button>
      <button onClick={() => showToastWithType('Error Toast!', 'error', {
      ...args,
      position: args.position
    })}>Show Error</button>
      <button onClick={() => showToastWithType('Info Toast!', 'info', {
      ...args,
      position: args.position
    })}>Show Info</button>
      <button onClick={() => showToastWithType('Warning Toast!', 'warning', {
      ...args,
      position: args.position
    })}>Show Warning</button>
      <Toast {...args} />
    </>,
  args: {
    position: 'top-right',
    autoClose: 3000,
    theme: 'light',
    newestOnTop: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  }
}`,...s.parameters?.docs?.source}}};const u=["Default"];export{s as Default,u as __namedExportsOrder,l as default};
