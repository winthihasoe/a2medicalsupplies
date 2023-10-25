import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { U as UserLayout } from "./UserLayout-c9437c70.js";
import { Box, Typography, Button } from "@mui/material";
import { Head, router } from "@inertiajs/react";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function SuccessOrder() {
  return /* @__PURE__ */ jsxs(UserLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Order successful" }),
    /* @__PURE__ */ jsxs(Box, { mt: 4, align: "center", p: 5, children: [
      /* @__PURE__ */ jsx(Typography, { fontSize: 25, fontWeight: 500, mb: 4, children: "Your order is placed successfully." }),
      /* @__PURE__ */ jsx(Box, { mb: 1, children: /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => router.get(route("home")),
          variant: "contained",
          size: "small",
          fullWidth: true,
          children: "Go to Home"
        }
      ) }),
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            my: 2
          },
          children: /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => router.visit(route("userOrders")),
              variant: "contained",
              color: "secondary",
              size: "small",
              fullWidth: true,
              children: "See my orders"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(Typography, { fontSize: 10, children: "Thank you for shopping with us!" })
    ] })
  ] });
}
export {
  SuccessOrder as default
};
