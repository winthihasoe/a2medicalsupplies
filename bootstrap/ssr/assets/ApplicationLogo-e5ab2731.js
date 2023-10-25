import { jsx } from "react/jsx-runtime";
import { Link } from "@inertiajs/react";
import { Box } from "@mui/material";
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Link, { className: "inertia-link", href: route("home"), children: /* @__PURE__ */ jsx("img", { src: "/images/logo.jpg", width: 80 }) }) });
}
export {
  ApplicationLogo as A
};
