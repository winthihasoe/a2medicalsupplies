import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Container, Box, Typography, Divider } from "@mui/material";
import { Head, Link } from "@inertiajs/react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function AdminProducts(props) {
  const products = props.products;
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Products", children: [
    /* @__PURE__ */ jsx(Head, { title: "Product list" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          border: "1px solid #000000",
          p: 2,
          my: 2,
          borderRadius: 5,
          minHeight: "80vh"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { fontSize: 20, mb: 1, children: "Product list" }),
          /* @__PURE__ */ jsx(Divider, {}),
          products.map((product, i) => /* @__PURE__ */ jsxs(
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
                /* @__PURE__ */ jsxs(Typography, { fontSize: 14, fontWeight: 600, children: [
                  i + 1,
                  ". ",
                  " ",
                  product.product_name
                ] }),
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    href: route("adminSingleProduct", product.id),
                    children: "See detail"
                  }
                )
              ]
            }
          ))
        ]
      }
    ) })
  ] });
}
export {
  AdminProducts as default
};
