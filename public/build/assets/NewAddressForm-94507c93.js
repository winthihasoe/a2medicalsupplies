import{j as e}from"./app-bfca789f.js";import{B as s}from"./Box-6d5617a7.js";import{T as i}from"./Typography-167ed09c.js";import{T as r}from"./TextField-470e9fa2.js";import{B as a}from"./Button-cc2979e5.js";function h({data:n,handleChange:t,handleSubmit:d,processing:o,errors:l}){return e.jsxs(s,{sx:{my:2,p:2,border:"3px dashed blue",borderRadius:4},children:[e.jsx(i,{fontSize:18,mb:1,children:"Deliver to:"}),e.jsxs(s,{sx:{display:"flex",gap:2,flexDirection:"column",px:2},children:[e.jsxs(s,{children:[e.jsx(r,{value:n.address,size:"small",fullWidth:!0,type:"text",multiline:!0,required:!0,onChange:t,name:"address",label:e.jsx(i,{fontSize:11,display:"inline-block",children:"Address"})}),l.address&&e.jsx(i,{ml:2,fontSize:12,children:l.address})]}),e.jsxs(s,{children:[e.jsx(r,{value:n.city,size:"small",fullWidth:!0,type:"text",multiline:!0,required:!0,onChange:t,name:"city",label:e.jsx(i,{fontSize:11,display:"inline-block",children:"City"})}),l.city&&e.jsx(i,{ml:2,fontSize:12,children:l.city})]}),e.jsxs(s,{children:[e.jsx(r,{value:n.phone,size:"small",fullWidth:!0,required:!0,onChange:t,name:"phone",type:"number",label:e.jsx(i,{fontSize:11,display:"inline-block",children:"Phone"})}),l.phone&&e.jsx(i,{ml:2,fontSize:12,children:l.phone})]})]}),e.jsx(s,{mt:2,align:"center",children:e.jsx(a,{variant:"contained",size:"small",onClick:d,disabled:o,children:"Save"})})]})}export{h as N};