import{W as n,r as d,j as s,a as l}from"./app-bfca789f.js";import{G as c}from"./GuestLayout-ad9bd3e5.js";import{I as u}from"./InputError-1182c97e.js";import{I as f}from"./InputLabel-ae8fa21c.js";import{P as x}from"./PrimaryButton-f882f843.js";import{T as w}from"./TextInput-d20020a5.js";import"./ApplicationLogo-e05fb370.js";import"./Box-6d5617a7.js";import"./clsx-2dc4ea28.js";import"./extendSxProp-7334409b.js";import"./Typography-167ed09c.js";import"./styled-1a14c428.js";function D(){const{data:t,setData:a,post:e,processing:o,errors:m,reset:i}=n({password:""});d.useEffect(()=>()=>{i("password")},[]);const p=r=>{r.preventDefault(),e(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:p,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ml-4",disabled:o,children:"Confirm"})})]})]})}export{D as default};