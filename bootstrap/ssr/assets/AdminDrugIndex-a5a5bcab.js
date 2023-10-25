import { jsxs, jsx } from "react/jsx-runtime";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Head, router } from "@inertiajs/react";
import { Box, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function AdminDrugIndex({ drugs }) {
  const [searchTerm, setSearchTerm] = useState("");
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "All Drugs", children: [
    /* @__PURE__ */ jsx(Head, { title: "Drugs" }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          position: "sticky",
          top: 0,
          bgcolor: "white",
          px: 2,
          pt: 2,
          pb: 1
        },
        children: [
          /* @__PURE__ */ jsx(
            TextField,
            {
              onChange: (e) => setSearchTerm(e.target.value),
              size: "small",
              label: /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Search drugs ..." }),
              fullWidth: true
            }
          ),
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                px: 2,
                py: 1,
                borderRadius: 2,
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ jsx(Typography, { fontSize: 14, children: "Drug Name" }),
                /* @__PURE__ */ jsx(Typography, { fontSize: 14, children: "Retail Price" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(Container, { maxWidth: "xs", children: /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: 1,
          p: 1,
          mb: 3
        },
        children: drugs.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (val.drug_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((drug) => /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              bgcolor: "#efefef",
              p: 1,
              borderRadius: 2,
              cursor: "pointer"
            },
            onClick: () => router.get(
              route("adminSingleDrug", drug.id)
            ),
            children: [
              /* @__PURE__ */ jsx(Box, { sx: { width: "70%" }, children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, children: drug.drug_name }) }),
              /* @__PURE__ */ jsx(Box, { sx: { width: "30%" }, align: "right", children: /* @__PURE__ */ jsxs(Typography, { fontSize: 14, children: [
                /* @__PURE__ */ jsx(
                  NumberWithComma,
                  {
                    value: Math.floor(
                      drug.retail_price
                    )
                  }
                ),
                " ",
                "Ks"
              ] }) })
            ]
          },
          drug.id
        ))
      }
    ) })
  ] });
}
export {
  AdminDrugIndex as default
};
