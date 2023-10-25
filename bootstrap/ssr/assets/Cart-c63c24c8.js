import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { U as UserLayout } from "./UserLayout-c9437c70.js";
import { Box, Typography, Button } from "@mui/material";
import { C as CartItemCard } from "./CartItemCard-067c87bb.js";
import { Head, router } from "@inertiajs/react";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
import "@mui/icons-material/DeleteRounded.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Remove.js";
function Cart(props) {
  const carts = props.carts;
  const totalAmount = props.totalAmount;
  return /* @__PURE__ */ jsxs(UserLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Cart" }),
    carts.length == 0 ? /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h6", fontWeight: 600, mb: 3, children: "You haven't any item in your cart." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "contained",
              size: "small",
              onClick: () => router.visit(route("home")),
              children: "Go to shopping"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(Typography, { fontSize: 20, fontWeight: 400, mt: 3, children: "My Cart" }),
      carts.map((cart) => /* @__PURE__ */ jsx(CartItemCard, { cart }, cart.id)),
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            opacity: "90%",
            bgcolor: "#ffffff"
          },
          children: /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3
              },
              children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "contained",
                    onClick: () => router.get(route("showCheckout")),
                    children: "Checkout"
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    sx: {
                      fontWeight: 900,
                      fontSize: { xs: 16, sm: 17, md: 18 }
                    },
                    children: [
                      "Total Amount:",
                      /* @__PURE__ */ jsx(NumberWithComma, { value: totalAmount }),
                      " Ks"
                    ]
                  }
                )
              ]
            }
          )
        }
      )
    ] })
  ] });
}
export {
  Cart as default
};
