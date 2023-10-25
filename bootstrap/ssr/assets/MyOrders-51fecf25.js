import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AccountLayout } from "./AccountLayout-d71c4777.js";
import { Container, Box, Typography, Divider, Button } from "@mui/material";
import { B as BackButton } from "./BackButton-329f6560.js";
import { Head, router, Link } from "@inertiajs/react";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
function MyOrders(props) {
  const orders = props.orders;
  return /* @__PURE__ */ jsxs(AccountLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Orders" }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
      /* @__PURE__ */ jsx(Box, { mb: 2, children: /* @__PURE__ */ jsxs(Typography, { fontSize: 20, fontWeight: 700, children: [
        /* @__PURE__ */ jsx(BackButton, {}),
        " My Orders"
      ] }) }),
      /* @__PURE__ */ jsx(Divider, {}),
      orders.length == 0 ? /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx(Typography, { variant: "h6", fontWeight: 600, mb: 3, children: "You have no order!" }),
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
      ) : /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            border: "1px solid #000000",
            p: 2,
            borderRadius: 4,
            my: 3
          },
          children: orders.map((order) => /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                my: 2,
                backgroundColor: "#efefef",
                borderRadius: 4
              },
              children: [
                /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: order.order_number }),
                /* @__PURE__ */ jsx(Link, { href: route("singleOrder", order.id), children: "view" })
              ]
            },
            order.id
          ))
        }
      )
    ] })
  ] });
}
export {
  MyOrders as default
};
