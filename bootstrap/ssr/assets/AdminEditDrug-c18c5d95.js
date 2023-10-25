import { jsxs, jsx } from "react/jsx-runtime";
import { P as PopUp } from "./PopUp-a6dd934e.js";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { useForm } from "@inertiajs/inertia-react";
import { Head, router } from "@inertiajs/react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function AdminEditDrug({ drug }) {
  const { data, setData, put, errors, processing } = useForm({
    ...drug
  });
  const [dataChanging, setDataChanging] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setDataChanging(true);
  };
  const [open, setOpen] = useState(false);
  const handleDeleteDrug = (e) => {
    e.preventDefault();
    router.delete(route("deleteDrug", drug.id));
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Edit Drug", children: [
    /* @__PURE__ */ jsx(Head, { title: "Edit Drug" }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: { display: "flex", flexDirection: "column", gap: 2, p: 2 },
        children: [
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              onChange: handleChange,
              name: "drug_name",
              type: "text",
              required: true,
              fullWidth: true,
              value: data.drug_name,
              label: /* @__PURE__ */ jsx(Typography, { display: "inline-block", fontSize: 12, children: "Drug name" })
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              onChange: handleChange,
              name: "retail_price",
              required: true,
              type: "number",
              fullWidth: true,
              value: data.retail_price,
              label: /* @__PURE__ */ jsx(Typography, { display: "inline-block", fontSize: 12, children: "Retail price" })
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              onChange: handleChange,
              name: "dr_price",
              type: "number",
              required: true,
              fullWidth: true,
              value: data.dr_price,
              label: /* @__PURE__ */ jsx(Typography, { display: "inline-block", fontSize: 12, children: "Doctor price" })
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              onChange: handleChange,
              name: "buying_price",
              type: "number",
              required: true,
              fullWidth: true,
              value: data.buying_price,
              label: /* @__PURE__ */ jsx(Typography, { display: "inline-block", fontSize: 12, children: "Purchase price" })
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              onChange: handleChange,
              name: "supplier",
              type: "text",
              required: true,
              fullWidth: true,
              value: data.supplier,
              label: /* @__PURE__ */ jsx(Typography, { display: "inline-block", fontSize: 12, children: "Supplier" })
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              onChange: handleChange,
              name: "purchase_date",
              type: "text",
              required: true,
              fullWidth: true,
              value: data.purchase_date,
              label: /* @__PURE__ */ jsx(Typography, { display: "inline-block", fontSize: 12, children: "Purchased date" })
            }
          )
        ]
      }
    ),
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
              onClick: () => router.put(route("updateDrug", drug.id), data),
              fullWidth: true,
              size: "small",
              variant: "contained",
              disabled: processing || !dataChanging,
              children: "Update"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              fullWidth: true,
              size: "small",
              variant: "contained",
              color: "secondary",
              onClick: () => setOpen(true),
              children: "Delete Drug"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxs(PopUp, { open, setOpen, children: [
      /* @__PURE__ */ jsxs(Typography, { variant: "h6", mb: 2, children: [
        "Delete this drug: ",
        drug.drug_name,
        "?"
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
                onClick: handleDeleteDrug,
                fullWidth: true,
                size: "small",
                variant: "contained",
                children: "Yes"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                fullWidth: true,
                size: "small",
                variant: "contained",
                color: "secondary",
                onClick: () => setOpen(false),
                children: "No"
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  AdminEditDrug as default
};
