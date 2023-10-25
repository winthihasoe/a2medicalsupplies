import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Container, Box, Typography, Divider } from "@mui/material";
import { Head, router, Link } from "@inertiajs/react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function Dashboard({ stockList }) {
  const DashboardMenu = [
    {
      Title: "Order History",
      Button: "See all",
      Link: "adminOrders"
    },
    {
      Title: "Products",
      Button: "See all & edit",
      Link: "adminProducts"
    },
    {
      Title: "Drugs",
      Button: "See all & edit",
      Link: "allDrugs"
    },
    {
      Title: "Add New Category",
      Button: "add",
      Link: "createCategory"
    },
    {
      Title: "All Users",
      Button: "See all",
      Link: "allUsers"
    }
  ];
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Dashboard", children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs(Container, { children: [
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            border: "2px solid #dedede",
            borderRadius: 5,
            p: 2,
            my: 2,
            height: 400,
            overflowY: "auto"
          },
          children: [
            /* @__PURE__ */ jsx(Typography, { fontSize: 22, gutterBottom: true, children: "Stock list" }),
            stockList.map((stock) => /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  backgroundColor: "#e3e3e3",
                  p: 2,
                  borderRadius: 3,
                  my: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer"
                },
                onClick: () => router.get(
                  route("adminSingleProduct", stock.id)
                ),
                children: [
                  /* @__PURE__ */ jsx(Typography, { fontWeight: 600, children: stock.product_name }),
                  /* @__PURE__ */ jsxs(Typography, { children: [
                    stock.stock,
                    " pc"
                  ] })
                ]
              },
              stock.id
            ))
          ]
        }
      ),
      DashboardMenu.map((Menu, index) => /* @__PURE__ */ jsxs(Box, { children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              my: 3
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 22, children: Menu.Title }),
              /* @__PURE__ */ jsx(Link, { href: route(Menu.Link), children: Menu.Button })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Divider, {})
      ] }, index))
    ] })
  ] });
}
export {
  Dashboard as default
};
