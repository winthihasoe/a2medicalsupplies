import { jsxs, jsx } from "react/jsx-runtime";
import { B as BackButton } from "./BackButton-329f6560.js";
import { U as UserLayout } from "./UserLayout-c9437c70.js";
import { Container, Typography, Box, Divider, Button } from "@mui/material";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded.js";
import LocalOfferIcon from "@mui/icons-material/LocalOffer.js";
import "react";
import { Head, Link, router } from "@inertiajs/react";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function SearchResult({ results, keywords }) {
  console.log(results);
  return /* @__PURE__ */ jsxs(UserLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: keywords + " results" }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "sm", children: [
      /* @__PURE__ */ jsxs(Typography, { fontSize: 12, gutterBottom: true, children: [
        /* @__PURE__ */ jsx(BackButton, {}),
        " Search result for:",
        " ",
        /* @__PURE__ */ jsx("strong", { children: keywords })
      ] }),
      results.length == 0 && /* @__PURE__ */ jsx(Box, { align: "center", my: 2, children: /* @__PURE__ */ jsx(Typography, { variant: "h6", children: "No result found!" }) }),
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "center",
            mt: 2,
            mb: 4
          },
          children: results.map((item) => /* @__PURE__ */ jsx(
            Box,
            {
              sx: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 3
              },
              children: item.product_name ? /* @__PURE__ */ jsx(
                Link,
                {
                  className: "inertia-link",
                  href: route("singleProduct", item.id),
                  children: /* @__PURE__ */ jsxs(
                    Box,
                    {
                      sx: {
                        p: 2,
                        border: "1px solid #ccc",
                        borderRadius: 3,
                        width: 300,
                        bgcolor: "#eee"
                      },
                      children: [
                        /* @__PURE__ */ jsxs(
                          Box,
                          {
                            sx: {
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center"
                            },
                            children: [
                              /* @__PURE__ */ jsx(
                                Typography,
                                {
                                  fontSize: 12,
                                  gutterBottom: true,
                                  children: /* @__PURE__ */ jsx("strong", { children: item.product_name })
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                MedicalInformationRoundedIcon,
                                {
                                  sx: { width: 20 }
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
                        /* @__PURE__ */ jsx(
                          Box,
                          {
                            sx: {
                              borderRadius: 2,
                              overflow: "hidden",
                              my: 2
                            },
                            children: /* @__PURE__ */ jsx(
                              "img",
                              {
                                src: `/storage/images/products/${item.images[0]}`,
                                width: "100%"
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                }
              ) : /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
                Box,
                {
                  sx: {
                    width: 300,
                    p: 2,
                    bgcolor: "#eee",
                    border: "1px solid #ccc",
                    borderRadius: 3
                  },
                  children: [
                    /* @__PURE__ */ jsxs(
                      Box,
                      {
                        sx: {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 2
                        },
                        children: [
                          /* @__PURE__ */ jsx(
                            Typography,
                            {
                              fontSize: 13,
                              fontWeight: 600,
                              children: item.category_name
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            LocalOfferIcon,
                            {
                              sx: { width: 40 }
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(Divider, {}),
                    /* @__PURE__ */ jsx(Box, { mt: 2, children: /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "outlined",
                        size: "small",
                        onClick: () => router.visit(
                          route(
                            "productList",
                            item.category_name
                          )
                        ),
                        children: "See more ..."
                      }
                    ) })
                  ]
                }
              ) })
            }
          ))
        }
      )
    ] })
  ] });
}
export {
  SearchResult as default
};
