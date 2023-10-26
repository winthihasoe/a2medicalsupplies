import{j as e,r as x,e as l,y as u}from"./app-7c82a233.js";import{d as g}from"./DeleteRounded-890ce0f4.js";import{N as y}from"./NumberWithComma-5ee55115.js";import{d as C}from"./Add-d8a16f44.js";import{r as v,i as b,I}from"./FlashMessage-ea0101f6.js";import{B as o}from"./Box-e662a6c7.js";import{T as n}from"./Typography-04bc32d1.js";import{G as i}from"./Grid-018b7f1a.js";import{C as _}from"./Chip-8f7d58d3.js";var d={},S=b;Object.defineProperty(d,"__esModule",{value:!0});var m=d.default=void 0,k=S(v()),z=e,D=(0,k.default)((0,z.jsx)("path",{d:"M19 13H5v-2h14v2z"}),"Remove");m=d.default=D;const f=x.createContext();function R(){const{cart:a,setIncrease:t,setDecrease:s}=x.useContext(f);return e.jsx(o,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"},children:e.jsxs(o,{sx:{display:"flex",justifyContent:"space-around",alignItems:"center",gap:1,border:"1px solid #ededed",borderRadius:3},children:[e.jsx(m,{fontSize:"small",onClick:s}),e.jsx(n,{bgcolor:"#dedede",p:1,sx:{fontSize:10},children:a.qty}),e.jsx(C,{fontSize:"small",onClick:t})]})})}function $(a){const t=a.cart;let s=t.qty;const p=r=>{r.preventDefault(),u.delete(route("deleteCart",t.id))},h=r=>{t.qty<t.product.stock&&(s+=1,c(r))},j=r=>{t.qty>1&&(s-=1,c(r))},c=r=>{r.preventDefault(),u.put(route("changeCartQty",t.id),{qty:s})};return e.jsx(f.Provider,{value:{cart:t,setIncrease:h,setDecrease:j},children:e.jsx(o,{sx:{p:1,my:2,borderRadius:5,border:"1px solid #dedede"},children:e.jsxs(i,{container:!0,spacing:1,alignItems:"center",children:[e.jsx(i,{item:!0,xs:4,children:e.jsx(l,{href:route("singleProduct",t.product.id),className:"inertia-link",children:e.jsx(o,{sx:{width:100,height:73,backgroundColor:"#efefef",borderRadius:4,overflow:"hidden"},children:e.jsx("img",{src:`/storage/images/products/${t.product.images[0]}`,width:"100%"})})})}),e.jsx(i,{item:!0,xs:5,children:e.jsxs(l,{href:route("singleProduct",t.product.id),className:"inertia-link",children:[e.jsx(n,{fontSize:13,fontWeight:400,children:t.product.product_name.length>25?t.product.product_name.substr(0,25)+"...":t.product.product_name}),e.jsxs(n,{sx:{fontWeight:900,fontSize:16},children:[e.jsx(y,{value:t.product.price})," ","Ks"]}),t.product.stock==0&&e.jsx(_,{label:"Preorder only",size:"small",variant:"outlined"}),t.product.stock==1&&e.jsx(n,{fontSize:9,color:"red",children:"Only 1 item left"})]})}),e.jsx(i,{item:!0,xs:3,children:e.jsxs(o,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[e.jsx(I,{onClick:p,children:e.jsx(g,{fontSize:"small"})}),e.jsx(R,{})]})})]})})})}export{$ as C};
