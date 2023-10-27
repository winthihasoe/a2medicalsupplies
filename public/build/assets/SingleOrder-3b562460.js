import{W as S,r as y,j as e,a as z}from"./app-eb81fd5d.js";import{A as C}from"./AccountLayout-2f1b59da.js";import{N as l}from"./NumberWithComma-f2b585d0.js";import{A as f}from"./ApplicationLogo-3728acfb.js";import{C as R}from"./List-98eed82e.js";import{T as r}from"./Typography-0828ed07.js";import{B as s}from"./Box-7ada19ab.js";import{T,a as _,b as k,c as a,d as n,e as D}from"./TableRow-69e367f9.js";import{D as B}from"./Divider-c8f32a12.js";import{B as h}from"./Button-f2c31d43.js";import{M as A,B as W,F as I}from"./Modal-f9284921.js";import{T as O}from"./TextField-de708461.js";import"./AppBar-f1bdfca8.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./index-6b61c778.js";import"./Select-6fc0466f.js";const q=d=>{const i={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(d).toLocaleDateString(void 0,i)};function re(d){const i=d.order,{data:c,setData:x,put:m,processing:j,errors:E}=S({review:i.review_by_customer}),p=t=>{t.preventDefault(),m(route("reviewByCustomer",i.id),c),o(!1)},g=t=>{t.preventDefault(),m(route("deleteReview",i.id)),o(!1),x({review:""})},[u,o]=y.useState(!1),b=()=>o(!0),v=()=>o(!1),w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"70%",sm:"50%",md:390},bgcolor:"background.paper",borderRadius:3,boxShadow:24,p:4};return e.jsxs(C,{children:[e.jsx(z,{title:i.user.name}),e.jsxs(R,{maxWidth:"xs",children:[e.jsxs(r,{fontSize:12,color:"primary",align:"right",children:["Order date: ",q(i.created_at)]}),e.jsxs(s,{width:"100%",display:"flex",gap:2,children:[e.jsxs(s,{sx:{p:2,borderRadius:2,backgroundColor:"#efefef",width:"60%",my:1},children:[e.jsxs(r,{fontSize:12,children:["Customer:"," ",e.jsx("b",{children:i.customer_name?i.customer_name:i.user.name})]}),e.jsxs(r,{fontSize:12,children:["Address: ",e.jsx("i",{children:i.address})]}),e.jsxs(r,{fontSize:12,children:["Order status: ",i.status]})]}),e.jsx(s,{sx:{p:2,borderRadius:2,border:"2px solid #efefef",backgroundColor:"#ffffff",width:"20%",my:1,display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(f,{})})]}),e.jsxs(r,{align:"right",fontSize:12,mt:1,children:["Invoice no: ",i.order_number]}),e.jsx(s,{sx:{border:"1px solid #e3e3e3",borderRadius:2,width:"100%"},children:e.jsxs(T,{children:[e.jsxs(_,{children:[e.jsx(k,{children:e.jsxs(a,{children:[e.jsx(n,{align:"left",children:e.jsx(r,{fontSize:11,children:"Item"})}),e.jsx(n,{align:"left",children:e.jsx(r,{fontSize:11,children:"Price"})}),e.jsx(n,{align:"center",children:e.jsx(r,{fontSize:11,children:"Qty."})}),e.jsx(n,{align:"right",children:e.jsx(r,{fontSize:11,children:"Amount"})})]})}),e.jsxs(D,{children:[i.order_items.map(t=>e.jsxs(a,{children:[e.jsx(n,{align:"left",children:e.jsx(r,{fontSize:12,fontWeight:600,children:t.product.product_name})}),e.jsx(n,{children:e.jsxs(r,{fontSize:11,children:[e.jsx(l,{value:t.price})," "]})}),e.jsx(n,{align:"right",children:e.jsx(r,{fontSize:11,children:t.qty})}),e.jsx(n,{align:"right",children:e.jsx(r,{fontSize:11,children:e.jsx(l,{value:t.price*t.qty})})})]})),e.jsxs(a,{children:[e.jsx(n,{rowSpan:3}),e.jsx(n,{colSpan:2,children:e.jsx(r,{fontSize:11,children:"Subtotal"})}),e.jsxs(n,{align:"right",children:[e.jsx(r,{fontSize:12,children:e.jsx(l,{value:i.total_amount})})," "]})]}),e.jsxs(a,{children:[e.jsx(n,{colSpan:2,children:e.jsx(r,{fontSize:11,children:"Total"})}),e.jsx(n,{align:"right",children:e.jsxs(r,{fontSize:12,children:[e.jsx(l,{value:i.total_amount})," ","Ks"]})})]})]})]}),e.jsx(r,{fontSize:13,fontWeight:600,align:"center",mt:3,children:"Thank you for shopping with us."}),e.jsx(r,{fontSize:11,align:"center",mb:3,children:e.jsx("i",{children:"Items sold are not exchangable."})})]})}),e.jsxs(s,{sx:{my:2,border:"1px solid #e3e3e3",borderRadius:2,display:"flex",gap:1,alignItems:"center",width:"90%"},children:[e.jsx(s,{width:"25%",display:"flex",justifyContent:"center",children:e.jsx(f,{})}),e.jsxs(s,{align:"center",children:[e.jsx(r,{fontSize:13,children:"Phone: 09444845977, 09963851223"}),e.jsx(r,{fontSize:13,children:"a2pharmacy.mdy@gmail.com"})]})]}),e.jsx(B,{}),i.review_by_customer&&e.jsx(s,{sx:{width:"100%",my:2,borderRadius:3,backgroundColor:"#ba7636"},children:e.jsxs(s,{p:2,children:[e.jsx(r,{color:"white",fontSize:14,mb:1,children:"Your Review:"}),e.jsx(r,{color:"white",fontSize:13,children:e.jsx("q",{children:c.review})})]})}),e.jsx(s,{px:5,my:2,children:e.jsx(h,{variant:"outlined",fullWidth:!0,onClick:b,children:i.review_by_customer==null?" Review this order":"Edit my review"})}),e.jsx(A,{open:u,onClose:v,closeAfterTransition:!0,slots:{backdrop:W},slotProps:{backdrop:{timeout:500}},children:e.jsx(I,{in:u,children:e.jsxs(s,{sx:w,children:[e.jsx(r,{id:"transition-modal-title",variant:"h6",component:"h2",mb:2,children:"Review this order"}),e.jsx(O,{size:"small",placeholder:"Your review here ...",fullWidth:!0,multiline:!0,value:c.review,onChange:t=>x({review:t.target.value})}),e.jsx(s,{sx:{mt:4,mb:2},align:"center",children:e.jsx(h,{onClick:p,size:"small",variant:"contained",disabled:j,children:"Save"})}),e.jsx(s,{children:e.jsx(h,{color:"error",onClick:g,disabled:j,children:"Delete Review"})})]})})})]})]})}export{re as default};