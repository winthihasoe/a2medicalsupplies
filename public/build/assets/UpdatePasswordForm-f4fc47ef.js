import{r as l,W as h,j as s}from"./app-bfca789f.js";import{I as n}from"./InputError-1182c97e.js";import{I as d}from"./InputLabel-ae8fa21c.js";import{P as v}from"./PrimaryButton-f882f843.js";import{T as p}from"./TextInput-d20020a5.js";import{t as g}from"./transition-69bba30b.js";import"./Typography-167ed09c.js";import"./clsx-2dc4ea28.js";import"./styled-1a14c428.js";import"./extendSxProp-7334409b.js";function k({className:u=""}){const c=l.useRef(),i=l.useRef(),{data:e,setData:a,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:m=>{m.password&&(o("password","password_confirmation"),c.current.focus()),m.current_password&&(o("current_password"),i.current.focus())}})};return s.jsxs("section",{className:u,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Current Password"}),s.jsx(p,{id:"current_password",ref:i,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(n,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"New Password"}),s.jsx(p,{id:"password",ref:c,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(p,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(v,{disabled:x,children:"Save"}),s.jsx(g,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{k as default};
