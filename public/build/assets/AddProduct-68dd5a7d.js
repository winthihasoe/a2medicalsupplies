import{W as v,j as e,a as z}from"./app-eb81fd5d.js";import{P as S}from"./ProductDescriptionEditor-56625162.js";import{A as k}from"./AdminLayout-f57f180f.js";import{d as w}from"./DeleteRounded-c82ac5d8.js";import{C as A}from"./List-98eed82e.js";import{T as a}from"./Typography-0828ed07.js";import{B as s}from"./Box-7ada19ab.js";import{C as D}from"./Chip-a8149923.js";import{D as d}from"./Divider-c8f32a12.js";import{T as m}from"./TextField-de708461.js";import{G as p}from"./Grid-e1512d28.js";import{B as h}from"./Button-f2c31d43.js";import"./index-0afe3130.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./Modal-f9284921.js";import"./BackButton-f8179b1a.js";import"./Select-6fc0466f.js";function J(g){const x=g.categories,{data:i,setData:n,post:u,processing:j,progress:o,errors:P}=v({product_name:"",price:"",description:"",category:"",stock:"",images:[]}),f=r=>{const t=i.images,c=Array.from(r.target.files);n({...i,images:[...t,...c]})},y=r=>{const t=[...i.images];t.splice(r,1),setFormState({...i,images:t})},l=r=>{const{name:t,value:c}=r.target;n({...i,[t]:c})},C=r=>{n({...i,description:r})},b=r=>{r.preventDefault(),u(route("storeProduct"),i)};return e.jsxs(k,{heading:"Add New Product",children:[e.jsx(z,{title:"Add new product"}),e.jsxs(A,{maxWidth:"md",children:[x.length==0?e.jsx(a,{fontSize:12,align:"center",mb:1,children:"There is no category. Add new first"}):e.jsxs(s,{mb:2,children:[e.jsx(a,{fontSize:10,mb:1,children:"Select a category first:"}),e.jsx(s,{sx:{display:"flex",flexWrap:"wrap",gap:2},children:x.map(r=>e.jsx(D,{label:r.category_name,size:"small",onClick:()=>n({...i,category:r.category_name}),style:{backgroundColor:i.category===r.category_name?"orange":""}},r.id))})]}),e.jsx(s,{sx:{height:200,width:280,margin:"10px auto",backgroundColor:"#dedede",borderRadius:5},children:i.images.length>0&&e.jsx(s,{children:e.jsx("div",{style:{overflowX:"auto",whiteSpace:"nowrap",maxHeight:"200px",borderRadius:20},children:i.images.map((r,t)=>e.jsxs("div",{style:{display:"inline-block",marginRight:"10px"},children:[e.jsx("img",{src:URL.createObjectURL(r),alt:`Image ${t}`,style:{maxHeight:"160px"}}),e.jsx("span",{style:{display:"block",textAlign:"center",cursor:"pointer",marginTop:"5px"},onClick:()=>y(t),children:e.jsx(w,{fontSize:"sm"})})]},t))})})}),e.jsxs("label",{variant:"outlined",className:"change-photo",children:["Add Photo",e.jsx("input",{className:"add-photo-input",type:"file",name:"images",accept:"image/png, image/jpeg, image/webp, image/HEIC",multiple:!0,onChange:f,style:{display:"none"}})]}),e.jsx(d,{}),e.jsx("form",{children:e.jsxs(s,{sx:{display:"flex",flexDirection:"column",gap:2,my:5},children:[e.jsxs(s,{children:[e.jsx(a,{fontSize:12,children:"Product Name:"}),e.jsx(m,{size:"small",fullWidth:!0,name:"product_name",onChange:l,value:i.product_name,required:!0})]}),e.jsxs(s,{children:[e.jsx(a,{fontSize:12,children:"Price:"}),e.jsx(m,{size:"small",fullWidth:!0,type:"number",name:"price",onChange:l,value:i.price,required:!0})]}),e.jsxs(s,{children:[e.jsx(a,{fontSize:12,children:"Stock:"}),e.jsx(m,{size:"small",fullWidth:!0,type:"number",name:"stock",onChange:l,value:i.stock,required:!0})]}),e.jsx(d,{}),e.jsx(d,{}),e.jsxs(s,{children:[e.jsx(a,{fontSize:12,children:"Description:"}),e.jsx(S,{handleChangeDescription:C,initialValue:i.description})]}),o&&e.jsxs("progress",{value:o.percentage,max:"100",children:[o.percentage,"%"]}),e.jsxs(p,{container:!0,children:[e.jsx(p,{item:!0,xs:6,px:3,children:e.jsx(h,{variant:"contained",size:"small",fullWidth:!0,onClick:b,disabled:j,children:"Save"})}),e.jsx(p,{item:!0,xs:6,px:3,children:e.jsx(h,{variant:"contained",color:"secondary",size:"small",fullWidth:!0,children:"Cancel"})})]})]})})]})]})}export{J as default};
