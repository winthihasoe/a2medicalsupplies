import{W as j,j as e,a as f}from"./app-eb81fd5d.js";import{A as u}from"./AccountLayout-2f1b59da.js";import{B as w}from"./BackButton-f8179b1a.js";import{C as z}from"./List-98eed82e.js";import{B as r}from"./Box-7ada19ab.js";import{T as s}from"./Typography-0828ed07.js";import{D as g}from"./Divider-c8f32a12.js";import{T as i}from"./TextField-de708461.js";import{B as C}from"./Button-f2c31d43.js";import"./AppBar-f1bdfca8.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./Modal-f9284921.js";import"./index-6b61c778.js";import"./Select-6fc0466f.js";function I(m){const l=m.user,{data:n,setData:d,post:p,errors:o,processing:S}=j({...l,current_password:"",password:"",password_confirmation:""}),a=t=>{const{name:x,value:h}=t.target;d({...n,[x]:h})},c=t=>{t.preventDefault(),p(route("updateUser",l.id),n)};return e.jsxs(u,{children:[e.jsx(f,{title:"Profile"}),e.jsxs(z,{maxWidth:"xs",children:[e.jsx(r,{mb:2,children:e.jsxs(s,{fontSize:20,fontWeight:700,children:[e.jsx(w,{})," Profile"]})}),e.jsx(g,{}),e.jsx("form",{children:e.jsxs(r,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:2,my:5},children:[e.jsxs(r,{children:[e.jsx(s,{fontSize:12,children:"Name: *"}),e.jsx(i,{size:"small",value:n.name,onChange:a,name:"name",type:"text",required:!0}),o.name&&e.jsx(s,{fontSize:12,children:o.name})]}),e.jsxs(r,{children:[e.jsx(s,{fontSize:12,children:"Email: *"}),e.jsx(i,{size:"small",value:n.email,onChange:a,name:"email",type:"email",required:!0}),o.email&&e.jsx(s,{fontSize:12,children:o.email})]}),e.jsxs(r,{children:[e.jsx(s,{fontSize:12,children:"Phone: *"}),e.jsx(i,{size:"small",value:n.phone,onChange:a,name:"phone",type:"number",required:!0}),o.phone&&e.jsx(s,{fontSize:12,children:o.phone})]}),e.jsxs(r,{children:[e.jsx(s,{fontSize:12,children:"Current Password:"}),e.jsx(i,{size:"small",name:"current_password",type:"password",value:n.current_password,onChange:a})]}),e.jsxs(r,{children:[e.jsx(s,{fontSize:12,children:"New Password:"}),e.jsx(i,{size:"small",name:"password",type:"password",value:n.password,onChange:a})]}),e.jsxs(r,{children:[e.jsx(s,{fontSize:12,children:"Confirm Password:"}),e.jsx(i,{size:"small",name:"password_confirmation",type:"password",value:n.password_confirmation,onChange:a})]}),e.jsx(r,{children:e.jsx(s,{fontSize:12,color:"red",children:o.password})}),e.jsx(r,{width:"100%",align:"center",children:e.jsx(C,{variant:"contained",size:"small",onClick:c,children:"Save"})})]})})]})]})}export{I as default};