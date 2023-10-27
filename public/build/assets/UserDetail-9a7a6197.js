import{r as u,W as v,j as e,a as S}from"./app-7c82a233.js";import{A as z}from"./AdminLayout-513ace82.js";import{B as l}from"./Box-e662a6c7.js";import{T as i}from"./Typography-04bc32d1.js";import{D as s}from"./Divider-2c71594e.js";import{B as d}from"./Button-5217d8cf.js";import{F as h,S as x}from"./Select-ccd6731e.js";import{M as o}from"./MenuItem-0206f474.js";import"./FlashMessage-ea0101f6.js";import"./clsx-2c1ea34b.js";import"./Modal-27333143.js";import"./styled-11de468a.js";import"./TransitionGroupContext-e300b184.js";import"./List-378c3b0b.js";import"./ButtonBase-16841190.js";import"./BackButton-1237b40d.js";import"./extendSxProp-98e1c0d9.js";function P({user:t}){const[m,a]=u.useState(!1),{data:n,setData:j,put:f,errors:C}=v({...t}),c=r=>{const{name:g,value:b}=r.target;j({...n,[g]:b})},p=r=>{r.preventDefault(),f(route("updateRole",t.id),n),a(!1)};return console.log(n),e.jsxs(z,{heading:"User Detail",children:[e.jsx(S,{title:t.name}),e.jsxs(l,{sx:{bgcolor:"#feefee",px:8,py:2,borderRadius:3,mb:2},children:[e.jsx(i,{fontSize:13,mt:4,children:"Name:"}),e.jsx(i,{fontSize:16,fontWeight:600,mb:2,children:t.name}),e.jsx(s,{variant:"inset"}),e.jsx(i,{fontSize:13,children:"Email:"}),e.jsx(i,{fontSize:16,fontWeight:600,mb:2,children:t.email}),e.jsx(s,{variant:"inset"}),e.jsx(i,{fontSize:13,children:"Phone:"}),e.jsx(i,{fontSize:16,fontWeight:600,mb:2,children:t.phone}),e.jsx(s,{variant:"inset"}),e.jsx(i,{fontSize:13,children:"Admin:"}),e.jsx(i,{fontSize:16,fontWeight:600,mb:2,children:t.is_admin==1?"Yes":"No"}),e.jsx(s,{variant:"inset"}),e.jsx(i,{fontSize:13,children:"Editor:"}),e.jsx(i,{fontSize:16,fontWeight:600,mb:2,children:t.is_editor==1?"Yes":"No"}),e.jsx(s,{variant:"inset"}),e.jsx(l,{textAlign:"center",sx:{my:2},children:e.jsx(d,{variant:"outlined",onClick:()=>a(!m),size:"small",children:"Change Role"})}),m&&e.jsxs("form",{onSubmit:p,children:[e.jsxs(h,{sx:{mt:1,mb:2,minWidth:250},children:[e.jsx("label",{id:"admin",children:"Change to admin?"}),e.jsxs(x,{labelId:"admin",id:"admin",value:n.is_admin,name:"is_admin",onChange:c,size:"small",children:[e.jsx(o,{value:1,children:"Yes"}),e.jsx(o,{value:0,children:"No"})]})]}),e.jsxs(h,{sx:{mt:1,mb:2,minWidth:250},children:[e.jsx("label",{id:"editor",children:"Change to editor?"}),e.jsxs(x,{labelId:"editor",id:"editor",value:n.is_editor,name:"is_editor",onChange:c,size:"small",children:[e.jsx(o,{value:1,children:"Yes"}),e.jsx(o,{value:0,children:"No"})]})]}),e.jsxs(l,{textAlign:"center",mb:4,children:[e.jsx(d,{variant:"contained",type:"submit",color:"success",children:"Save"}),e.jsx(d,{onClick:()=>a(!1),children:"Cancel"})]})]})]},t.id)]})}export{P as default};