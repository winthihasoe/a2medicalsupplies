import{W as w,r as f,j as s,a as x}from"./app-bfca789f.js";import{G as j}from"./GuestLayout-ad9bd3e5.js";import{I as t}from"./InputError-1182c97e.js";import{I as m}from"./InputLabel-ae8fa21c.js";import{P as v}from"./PrimaryButton-f882f843.js";import{T as i}from"./TextInput-d20020a5.js";import"./ApplicationLogo-e05fb370.js";import"./Box-6d5617a7.js";import"./clsx-2dc4ea28.js";import"./extendSxProp-7334409b.js";import"./Typography-167ed09c.js";import"./styled-1a14c428.js";function k({token:l,email:n}){const{data:e,setData:r,post:p,processing:d,errors:o,reset:c}=w({token:l,email:n,password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const u=a=>{a.preventDefault(),p(route("password.store"))};return s.jsxs(j,{children:[s.jsx(x,{title:"Reset Password"}),s.jsxs("form",{onSubmit:u,children:[s.jsxs("div",{children:[s.jsx(m,{htmlFor:"email",value:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",value:e.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value)}),s.jsx(t,{message:o.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password",value:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>r("password",a.target.value)}),s.jsx(t,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(m,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(i,{type:"password",name:"password_confirmation",value:e.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value)}),s.jsx(t,{message:o.password_confirmation,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(v,{className:"ml-4",disabled:d,children:"Reset Password"})})]})]})}export{k as default};
