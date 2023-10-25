import { jsxs, jsx } from "react/jsx-runtime";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Head, router } from "@inertiajs/react";
import { Container, Typography, Box, Button } from "@mui/material";
import "react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function AdminSingleDrug({ drug }) {
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: drug.drug_name, children: [
    /* @__PURE__ */ jsx(Head, { title: drug.drug_name }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          fontSize: 18,
          fontWeight: 600,
          align: "center",
          my: 2,
          children: "Drug Detail"
        }
      ),
      /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              bgcolor: "#efefef",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: "Drug Name" }),
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: drug.drug_name })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              bgcolor: "#ba7636",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(
                Typography,
                {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 600,
                  children: "Retail Price"
                }
              ),
              /* @__PURE__ */ jsxs(
                Typography,
                {
                  color: "white",
                  fontSize: 16,
                  fontWeight: 600,
                  children: [
                    /* @__PURE__ */ jsx(
                      NumberWithComma,
                      {
                        value: Math.floor(drug.retail_price)
                      }
                    ),
                    " ",
                    "Ks"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              bgcolor: "#efefef",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: "Doctor Price" }),
              /* @__PURE__ */ jsxs(Typography, { fontSize: 14, fontWeight: 600, children: [
                drug.dr_price,
                " Ks"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              bgcolor: "#ffefff",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: "Purchase Price" }),
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: drug.buying_price })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              bgcolor: "#efefef",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: "Supplier" }),
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: drug.supplier })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              bgcolor: "#efefef",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: "Purchase at" }),
              /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: drug.purchase_date })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            justifyContent: "space-around",
            my: 3,
            px: 3,
            gap: 3
          },
          children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => router.get(route("editDrug", drug.id)),
                fullWidth: true,
                size: "small",
                variant: "contained",
                children: "Edit"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                fullWidth: true,
                size: "small",
                variant: "contained",
                color: "secondary",
                onClick: () => router.get(route("allDrugs")),
                children: "Cancel"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  AdminSingleDrug as default
};
