import { jsxs, jsx } from "react/jsx-runtime";
import { B as BackButton } from "./BackButton-329f6560.js";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { U as UserLayout } from "./UserLayout-c9437c70.js";
import { Head, router } from "@inertiajs/react";
import { Container, Box, Typography } from "@mui/material";
import "react";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function ProductList(props) {
  const products = props.products;
  return /* @__PURE__ */ jsxs(UserLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Products" }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "sm", children: [
      /* @__PURE__ */ jsx(BackButton, {}),
      products.length == 0 ? /* @__PURE__ */ jsx(
        Box,
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          children: /* @__PURE__ */ jsx(Typography, { fontSize: 18, fontWeight: 600, children: "Products are coming soon ..." })
        }
      ) : /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            px: 2,
            py: 3,
            my: 2,
            backgroundColor: "#efefef",
            borderRadius: 4,
            gap: 2
          },
          children: products.map((product) => /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                border: "1px solid #ba7636",
                borderRadius: 3,
                overflow: "hidden",
                width: "80%",
                cursor: "pointer"
              },
              onClick: () => router.get(
                route("singleProduct", product.id)
              ),
              children: [
                /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/storage/images/products/${product.images[0]}`,
                    width: "100%"
                  }
                ) }),
                /* @__PURE__ */ jsxs(Box, { p: 2, children: [
                  /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: product.product_name }),
                  /* @__PURE__ */ jsxs(
                    Typography,
                    {
                      color: "primary",
                      fontSize: 15,
                      fontWeight: 600,
                      children: [
                        /* @__PURE__ */ jsx(
                          NumberWithComma,
                          {
                            value: product.price
                          }
                        ),
                        " ",
                        "Ks"
                      ]
                    }
                  )
                ] })
              ]
            },
            product.id
          ))
        }
      )
    ] })
  ] });
}
export {
  ProductList as default
};
