import{j as e,a as o,y as s}from"./app-eb81fd5d.js";import{N as l}from"./NumberWithComma-f2b585d0.js";import{A as a}from"./AdminLayout-f57f180f.js";import{C as f}from"./List-98eed82e.js";import{T as i}from"./Typography-0828ed07.js";import{B as n}from"./Box-7ada19ab.js";import{B as r}from"./Button-f2c31d43.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./Modal-f9284921.js";import"./BackButton-f8179b1a.js";function W({drug:t}){return e.jsxs(a,{heading:t.drug_name,children:[e.jsx(o,{title:t.drug_name}),e.jsxs(f,{maxWidth:"xs",children:[e.jsx(i,{fontSize:18,fontWeight:600,align:"center",my:2,children:"Drug Detail"}),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Drug Name"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.drug_name})]}),e.jsxs(n,{sx:{bgcolor:"#ba7636",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{color:"white",fontSize:16,fontWeight:600,children:"Retail Price"}),e.jsxs(i,{color:"white",fontSize:16,fontWeight:600,children:[e.jsx(l,{value:Math.floor(t.retail_price)})," ","Ks"]})]}),e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Doctor Price"}),e.jsxs(i,{fontSize:14,fontWeight:600,children:[t.dr_price," Ks"]})]}),e.jsxs(n,{sx:{bgcolor:"#ffefff",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Purchase Price"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.buying_price})]}),e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Supplier"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.supplier})]}),e.jsxs(n,{sx:{bgcolor:"#efefef",borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center",p:2},children:[e.jsx(i,{fontSize:14,fontWeight:600,children:"Purchase at"}),e.jsx(i,{fontSize:14,fontWeight:600,children:t.purchase_date})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-around",my:3,px:3,gap:3},children:[e.jsx(r,{onClick:()=>s.get(route("editDrug",t.id)),fullWidth:!0,size:"small",variant:"contained",children:"Edit"}),e.jsx(r,{fullWidth:!0,size:"small",variant:"contained",color:"secondary",onClick:()=>s.get(route("allDrugs")),children:"Cancel"})]})]})]})}export{W as default};
