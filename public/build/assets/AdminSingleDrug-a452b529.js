import{j as e,a as o,y as r}from"./app-bfca789f.js";import{N as l}from"./NumberWithComma-33cbe42f.js";import{A as a}from"./AdminLayout-5f79c8c8.js";import{C as f}from"./List-0d824f1b.js";import{T as i}from"./Typography-167ed09c.js";import{B as n}from"./Box-6d5617a7.js";import{B as s}from"./Button-cc2979e5.js";import"./FlashMessage-5076cc4d.js";import"./clsx-2dc4ea28.js";import"./Modal-412f03d8.js";import"./styled-1a14c428.js";import"./TransitionGroupContext-9a834f65.js";import"./ButtonBase-1745f224.js";import"./BackButton-3d0bdef6.js";import"./extendSxProp-7334409b.js";function w({drug:t}){return e.jsxs(a,{heading:t.drug_name,children:[e.jsx(o,{title:t.drug_name}),e.jsxs(f,{maxWidth:"xs",children:[e.jsx(i,{fontSize:18,fontWeight:600,align:"center",my:2,children:"Drug Detail"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Drug Name"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.drug_name})]}),e.jsxs(n,{sx:{bgcolor:"#ba7636",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{color:"white",fontSize:16,fontWeight:600,children:"Retail Price"}),e.jsxs(i,{color:"white",fontSize:16,fontWeight:600,children:[e.jsx(l,{value:Math.floor(t.retail_price)})," ","Ks"]})]}),e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Doctor Price"}),e.jsxs(i,{fontSize:14,fontWeight:600,children:[t.dr_price," Ks"]})]}),e.jsxs(n,{sx:{bgcolor:"#ffefff",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Purchase Price"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.buying_price})]}),e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Supplier"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.supplier})]}),e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Purchase at"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.purchase_date})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-around",my:3,px:3,gap:3},children:[e.jsx(s,{onClick:()=>r.get(route("editDrug",t.id)),fullWidth:!0,size:"small",variant:"contained",children:"Edit"}),e.jsx(s,{fullWidth:!0,size:"small",variant:"contained",color:"secondary",onClick:()=>r.get(route("allDrugs")),children:"Cancel"})]})]})]})}export{w as default};