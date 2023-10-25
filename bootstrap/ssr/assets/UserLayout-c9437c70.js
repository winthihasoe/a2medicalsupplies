import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Container } from "@mui/material";
import "react";
import { A as AppBar, S as SearchBar } from "./AppBar-36bbc088.js";
import { F as FlashMessage } from "./FlashMessage-1db13e54.js";
function UserLayout({ children }) {
  return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      },
      children: [
        /* @__PURE__ */ jsx(FlashMessage, {}),
        /* @__PURE__ */ jsx(AppBar, {}),
        /* @__PURE__ */ jsxs(Container, { component: "main", children: [
          /* @__PURE__ */ jsx(
            Box,
            {
              sx: {
                display: { xs: "block", sm: "block", md: "none" }
              },
              children: /* @__PURE__ */ jsx(SearchBar, {})
            }
          ),
          children
        ] })
      ]
    }
  ) });
}
export {
  UserLayout as U
};
