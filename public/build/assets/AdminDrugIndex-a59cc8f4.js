import{r as n,j as e,a as l,y as m}from"./app-bfca789f.js";import{N as p}from"./NumberWithComma-33cbe42f.js";import{A as x}from"./AdminLayout-5f79c8c8.js";import{B as i}from"./Box-6d5617a7.js";import{T as d}from"./TextField-470e9fa2.js";import{T as t}from"./Typography-167ed09c.js";import{C as c}from"./List-0d824f1b.js";import"./FlashMessage-5076cc4d.js";import"./clsx-2dc4ea28.js";import"./Modal-412f03d8.js";import"./styled-1a14c428.js";import"./TransitionGroupContext-9a834f65.js";import"./ButtonBase-1745f224.js";import"./BackButton-3d0bdef6.js";import"./extendSxProp-7334409b.js";import"./Select-7f8e6ae7.js";function N({drugs:o}){const[s,a]=n.useState("");return e.jsxs(x,{heading:"All Drugs",children:[e.jsx(l,{title:"Drugs"}),e.jsxs(i,{sx:{position:"sticky",top:0,bgcolor:"white",px:2,pt:2,pb:1},children:[e.jsx(d,{onChange:r=>a(r.target.value),size:"small",label:e.jsx(t,{fontSize:13,children:"Search drugs ..."}),fullWidth:!0}),e.jsxs(i,{sx:{display:"flex",px:2,py:1,borderRadius:2,justifyContent:"space-between"},children:[e.jsx(t,{fontSize:14,children:"Drug Name"}),e.jsx(t,{fontSize:14,children:"Retail Price"})]})]}),e.jsx(c,{maxWidth:"xs",children:e.jsx(i,{sx:{display:"flex",flexDirection:"column",gap:1,p:1,mb:3},children:o.filter(r=>{if(s=="")return r;if(r.drug_name.toLowerCase().includes(s.toLowerCase()))return r}).map(r=>e.jsxs(i,{sx:{display:"flex",bgcolor:"#efefef",p:1,borderRadius:2,cursor:"pointer"},onClick:()=>m.get(route("adminSingleDrug",r.id)),children:[e.jsx(i,{sx:{width:"70%"},children:e.jsx(t,{fontSize:14,children:r.drug_name})}),e.jsx(i,{sx:{width:"30%"},align:"right",children:e.jsxs(t,{fontSize:14,children:[e.jsx(p,{value:Math.floor(r.retail_price)})," ","Ks"]})})]},r.id))})})]})}export{N as default};