import{W as n,j as e,a as d}from"./app-bfca789f.js";import{G as u}from"./GuestLayout-ad9bd3e5.js";import{I as p}from"./InputError-1182c97e.js";import{P as c}from"./PrimaryButton-f882f843.js";import{T as x}from"./TextInput-d20020a5.js";import"./ApplicationLogo-e05fb370.js";import"./Box-6d5617a7.js";import"./clsx-2dc4ea28.js";import"./extendSxProp-7334409b.js";import"./Typography-167ed09c.js";import"./styled-1a14c428.js";function F({status:t}){const{data:a,setData:o,post:r,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(x,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(p,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(c,{className:"ml-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{F as default};
