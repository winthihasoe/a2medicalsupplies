import { jsxs, jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import "react";
import { A as AppBar } from "./AppBar-36bbc088.js";
import { F as FlashMessage } from "./FlashMessage-1db13e54.js";
function AccountLayout({ children }) {
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx(Box, { component: "main", maxWidth: "xs", children })
      ]
    }
  );
}
export {
  AccountLayout as A
};
