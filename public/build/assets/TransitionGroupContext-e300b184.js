import{r as o,m as f}from"./app-7c82a233.js";function i(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const s=typeof window<"u"?o.useLayoutEffect:o.useEffect,p=s;function y(t){const e=o.useRef(t);return p(()=>{e.current=t}),o.useCallback((...n)=>(0,e.current)(...n),[])}function E(...t){return o.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{i(n,e)})},t)}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(c,u){return c.__proto__=u,c},r(t,e)}function _(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,r(t,e)}const O=f.createContext(null);export{O as T,_,E as a,y as b,i as s,p as u};