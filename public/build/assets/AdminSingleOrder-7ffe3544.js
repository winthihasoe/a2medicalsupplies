import{r as C,j as e,a as T}from"./app-eb81fd5d.js";import{A as w}from"./AdminLayout-f57f180f.js";import{N as d}from"./NumberWithComma-f2b585d0.js";import{u as A}from"./index-6b61c778.js";import{B as a}from"./Box-7ada19ab.js";import{T as s}from"./Typography-0828ed07.js";import{T as D,a as k,b as B,c as o,d as r,e as O}from"./TableRow-69e367f9.js";import{D as R}from"./Divider-c8f32a12.js";import{G as c}from"./Grid-e1512d28.js";import{S as _}from"./Select-6fc0466f.js";import{M as l}from"./MenuItem-f8c8f1cb.js";import{B as h}from"./Button-f2c31d43.js";import{M as P,B as F,F as I}from"./Modal-f9284921.js";import{T as M}from"./TextField-de708461.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./List-98eed82e.js";import"./BackButton-f8179b1a.js";const W=i=>{const t={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(i).toLocaleDateString(void 0,t)};function re({order:i}){const{data:t,setData:x,put:m,errors:E,processing:j}=A({...i}),f=n=>{const z=n.target.value;x({...t,status:z})},g=n=>{n.preventDefault(),m(route("adminUpdateOrder",i.id),t)},[u,p]=C.useState(!1),S=()=>p(!0),b=()=>p(!1),v={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"70%",sm:"50%",md:390},bgcolor:"background.paper",borderRadius:3,boxShadow:24,p:4},y=n=>{n.preventDefault(),m(route("updateAddressByAdmin",i.id),t)};return e.jsxs(w,{heading:"Single Order History",children:[e.jsx(T,{title:"Order detail"}),e.jsxs(a,{sx:{p:2,borderRadius:2,backgroundColor:"#efefef",width:250,my:4},children:[e.jsxs(s,{fontSize:12,children:["Customer: ",i.user.name]}),e.jsxs(s,{fontSize:12,children:["Invoice no: ",i.order_number]}),e.jsxs(s,{fontSize:12,children:["Order date: ",W(i.created_at)]}),e.jsxs(s,{fontSize:12,children:["Address: ",i.address]})]}),e.jsx(a,{sx:{border:"1px solid #e3e3e3",my:3,borderRadius:2},children:e.jsx(D,{children:e.jsxs(k,{children:[e.jsx(B,{children:e.jsxs(o,{children:[e.jsx(r,{align:"left",children:e.jsx(s,{fontSize:11,children:"Item"})}),e.jsx(r,{align:"left",children:e.jsx(s,{fontSize:11,children:"Price"})}),e.jsx(r,{align:"left",children:e.jsx(s,{fontSize:11,children:"Qty."})}),e.jsx(r,{align:"left",children:e.jsx(s,{fontSize:11,children:"Amount"})})]})}),e.jsxs(O,{children:[i.order_items.map(n=>e.jsxs(o,{children:[e.jsx(r,{align:"left",children:e.jsx(s,{fontSize:12,fontWeight:600,children:n.product.product_name})}),e.jsx(r,{children:e.jsxs(s,{fontSize:11,children:[e.jsx(d,{value:n.price})," "]})}),e.jsx(r,{align:"right",children:e.jsx(s,{fontSize:11,children:n.qty})}),e.jsx(r,{align:"right",children:e.jsx(s,{fontSize:11,children:e.jsx(d,{value:n.price*n.qty})})})]})),e.jsxs(o,{children:[e.jsx(r,{rowSpan:3}),e.jsx(r,{colSpan:2,children:e.jsx(s,{fontSize:11,children:"Subtotal"})}),e.jsxs(r,{align:"right",children:[e.jsx(s,{fontSize:12,children:e.jsx(d,{value:i.total_amount})})," "]})]}),e.jsxs(o,{children:[e.jsx(r,{colSpan:2,children:e.jsx(s,{fontSize:11,children:"Total"})}),e.jsx(r,{align:"right",children:e.jsxs(s,{fontSize:12,children:[e.jsx(d,{value:i.total_amount})," ","Ks"]})})]})]})]})})}),e.jsxs(a,{sx:{p:1,my:4,border:"1px solid #e3e3e3",borderRadius:2,display:"flex",gap:1,alignItems:"center",width:280},children:[e.jsx(a,{children:e.jsx("img",{src:"/images/logo.jpg",width:80})}),e.jsxs(a,{children:[e.jsx(s,{fontSize:13,children:"Phone: 09444845977, 09963851223"}),e.jsx(s,{fontSize:13,children:"a2pharmacy.mdy@gmail.com"})]})]}),e.jsx(R,{}),e.jsxs(c,{container:!0,children:[e.jsx(c,{item:!0,xs:6,align:"center",children:e.jsx(a,{my:3,children:e.jsxs(_,{size:"small",value:t.status,onChange:f,children:[e.jsx(l,{value:"pending",children:"Pending"}),e.jsx(l,{value:"processing",children:"Processing"}),e.jsx(l,{value:"shipped",children:"Shipped"}),e.jsx(l,{value:"delivered",children:"Delivered"}),e.jsx(l,{value:"cancelled",children:"Cancelled"})]})})}),e.jsx(c,{item:!0,xs:6,align:"center",children:e.jsx(a,{my:3,children:e.jsx(h,{variant:"contained",color:"secondary",onClick:S,children:"Edit address"})})})]}),e.jsx(a,{px:5,mb:4,children:e.jsx(h,{variant:"contained",fullWidth:!0,onClick:g,disabled:j||i.status==t.status,children:"Save"})}),e.jsx(P,{open:u,onClose:b,closeAfterTransition:!0,slots:{backdrop:F},slotProps:{backdrop:{timeout:500}},children:e.jsx(I,{in:u,children:e.jsxs(a,{sx:v,children:[e.jsx(s,{id:"transition-modal-title",variant:"h6",component:"h2",mb:2,children:"Customer address"}),e.jsx(M,{size:"small",placeholder:"Your review here ...",fullWidth:!0,multiline:!0,value:t.address,onChange:n=>x({...t,address:n.target.value})}),e.jsx(a,{sx:{mt:4,mb:2},align:"center",children:e.jsx(h,{onClick:y,size:"small",variant:"contained",disabled:j||i.address==t.address,children:"Save"})})]})})})]})}export{re as default};