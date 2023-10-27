import{j as t,a as l,y as n}from"./app-eb81fd5d.js";import{U as p}from"./UserLayout-7aec7b48.js";import{C as c}from"./CartItemCard-fb2cfb02.js";import{N as h}from"./NumberWithComma-f2b585d0.js";import{B as o}from"./Box-7ada19ab.js";import{T as i}from"./Typography-0828ed07.js";import{B as m}from"./Button-f2c31d43.js";import"./AppBar-f1bdfca8.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./Modal-f9284921.js";import"./List-98eed82e.js";import"./index-6b61c778.js";import"./TextField-de708461.js";import"./Select-6fc0466f.js";import"./DeleteRounded-c82ac5d8.js";import"./Add-3e77e730.js";import"./Grid-e1512d28.js";import"./Chip-a8149923.js";function S(r){const e=r.carts,a=r.totalAmount;return t.jsxs(p,{children:[t.jsx(l,{title:"Cart"}),e.length==0?t.jsxs(o,{sx:{width:"100%",height:"70vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[t.jsx(i,{variant:"h6",fontWeight:600,mb:3,children:"You haven't any item in your cart."}),t.jsx(m,{variant:"contained",size:"small",onClick:()=>n.visit(route("home")),children:"Go to shopping"})]}):t.jsxs(o,{children:[t.jsx(i,{fontSize:20,fontWeight:400,mt:3,children:"My Cart"}),e.map(s=>t.jsx(c,{cart:s},s.id)),t.jsx(o,{sx:{position:"fixed",bottom:0,left:0,width:"100%",opacity:"90%",bgcolor:"#ffffff"},children:t.jsxs(o,{sx:{p:1,display:"flex",justifyContent:"center",alignItems:"center",gap:3},children:[t.jsx(m,{variant:"contained",onClick:()=>n.get(route("showCheckout")),children:"Checkout"}),t.jsxs(i,{sx:{fontWeight:900,fontSize:{xs:16,sm:17,md:18}},children:["Total Amount:",t.jsx(h,{value:a})," Ks"]})]})})]})]})}export{S as default};