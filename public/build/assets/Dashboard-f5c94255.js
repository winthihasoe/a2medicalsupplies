import{j as e,a,y as d,e as l}from"./app-eb81fd5d.js";import{A as m}from"./AdminLayout-f57f180f.js";import{C as p}from"./List-98eed82e.js";import{B as r}from"./Box-7ada19ab.js";import{T as i}from"./Typography-0828ed07.js";import{D as u}from"./Divider-c8f32a12.js";import"./FlashMessage-afa137b7.js";import"./clsx-4935e7ba.js";import"./Modal-f9284921.js";import"./BackButton-f8179b1a.js";function D({stockList:o}){const s=[{Title:"Order History",Button:"See all",Link:"adminOrders"},{Title:"Products",Button:"See all & edit",Link:"adminProducts"},{Title:"Drugs",Button:"See all & edit",Link:"allDrugs"},{Title:"Add New Category",Button:"add",Link:"createCategory"},{Title:"All Users",Button:"See all",Link:"allUsers"}];return e.jsxs(m,{heading:"Dashboard",children:[e.jsx(a,{title:"Dashboard"}),e.jsxs(p,{children:[e.jsxs(r,{sx:{border:"2px solid #dedede",borderRadius:5,p:2,my:2,height:400,overflowY:"auto"},children:[e.jsx(i,{fontSize:22,gutterBottom:!0,children:"Stock list"}),o.map(t=>e.jsxs(r,{sx:{backgroundColor:"#e3e3e3",p:2,borderRadius:3,my:2,display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer"},onClick:()=>d.get(route("adminSingleProduct",t.id)),children:[e.jsx(i,{fontWeight:600,children:t.product_name}),e.jsxs(i,{children:[t.stock," pc"]})]},t.id))]}),s.map((t,n)=>e.jsxs(r,{children:[e.jsxs(r,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",px:2,my:3},children:[e.jsx(i,{fontSize:22,children:t.Title}),e.jsx(l,{href:route(t.Link),children:t.Button})]}),e.jsx(u,{})]},n))]})]})}export{D as default};
