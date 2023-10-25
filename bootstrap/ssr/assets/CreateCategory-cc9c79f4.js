import { jsxs, jsx } from "react/jsx-runtime";
import { P as PopUp } from "./PopUp-a6dd934e.js";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { useForm, Head } from "@inertiajs/react";
import { Box, Typography, Chip, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function CreateCategory({ categories }) {
  const {
    data,
    setData,
    post,
    error,
    delete: destroy,
    processing,
    progress
  } = useForm({
    category_name: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("addCategory"), data);
    setData({ category_name: "" });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    destroy(route("deleteCategory", selectCategory.id), selectCategory);
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const [selectCategory, setSelectCategory] = useState(null);
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Category", children: [
    /* @__PURE__ */ jsx(Head, { title: "Category" }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          my: 2,
          p: 2,
          border: "1px solid #dedede",
          borderRadius: 5
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { fontSize: 18, fontWeight: 600, my: 2, children: "Recent Categories" }),
          /* @__PURE__ */ jsx(Box, { sx: { p: 1, display: "flex", flexWrap: "wrap", gap: 2 }, children: categories.map((category) => /* @__PURE__ */ jsx(
            Chip,
            {
              label: category.category_name,
              onDelete: () => {
                setOpen(true);
                setSelectCategory(category);
              }
            },
            category.id
          )) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(PopUp, { open, setOpen, children: [
      /* @__PURE__ */ jsxs(Typography, { variant: "h6", align: "center", children: [
        "Delete Category: ",
        selectCategory == null ? void 0 : selectCategory.category_name
      ] }),
      /* @__PURE__ */ jsxs(Grid, { container: true, my: 2, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, px: 3, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            size: "small",
            fullWidth: true,
            onClick: handleDelete,
            disabled: processing,
            children: "Yes"
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, px: 3, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            color: "secondary",
            size: "small",
            fullWidth: true,
            onClick: () => setOpen(false),
            children: "Cancel"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          my: 2,
          p: 2,
          border: "1px solid #dedede",
          borderRadius: 5
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { fontSize: 18, fontWeight: 600, my: 2, children: "Create New Category" }),
          /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, children: /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                flexDirection: "column",
                gap: 2,
                my: 2
              },
              children: [
                /* @__PURE__ */ jsxs(Box, { p: 2, children: [
                  /* @__PURE__ */ jsx(Typography, { fontSize: 12, mb: 1, children: "Category Name:" }),
                  /* @__PURE__ */ jsx(
                    TextField,
                    {
                      size: "small",
                      fullWidth: true,
                      name: "category_name",
                      onChange: handleChange,
                      value: data.category_name,
                      required: true
                    }
                  )
                ] }),
                progress && /* @__PURE__ */ jsxs("progress", { value: progress.percentage, max: "100", children: [
                  progress.percentage,
                  "%"
                ] }),
                /* @__PURE__ */ jsxs(Grid, { container: true, children: [
                  /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, px: 3, children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "contained",
                      size: "small",
                      fullWidth: true,
                      type: "submit",
                      disabled: processing,
                      children: "Save"
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, px: 3, children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "contained",
                      color: "secondary",
                      size: "small",
                      fullWidth: true,
                      onClick: () => setData({ category_name: "" }),
                      children: "Cancel"
                    }
                  ) })
                ] })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  CreateCategory as default
};
