import { jsxs, jsx } from "react/jsx-runtime";
import { P as ProductDescriptionEditor } from "./ProductDescriptionEditor-cc9b1cd9.js";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { useForm, Head } from "@inertiajs/react";
import { Container, Typography, Box, Chip, Divider, TextField, Grid, Button } from "@mui/material";
import "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded.js";
import "react-quill";
import "react-color";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function AddProduct(props) {
  const categories = props.categories;
  const { data, setData, post, processing, progress, errors } = useForm({
    product_name: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    images: []
  });
  const handleImageChange = (e) => {
    const prevImages = data.images;
    const selectedImages = Array.from(e.target.files);
    setData({ ...data, images: [...prevImages, ...selectedImages] });
  };
  const handleRemoveImage = (index) => {
    const newImages = [...data.images];
    newImages.splice(index, 1);
    setFormState({ ...data, images: newImages });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
  const handleChangeDescription = (value) => {
    setData({
      ...data,
      description: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("storeProduct"), data);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Add New Product", children: [
    /* @__PURE__ */ jsx(Head, { title: "Add new product" }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "md", children: [
      categories.length == 0 ? /* @__PURE__ */ jsx(Typography, { fontSize: 12, align: "center", mb: 1, children: "There is no category. Add new first" }) : /* @__PURE__ */ jsxs(Box, { mb: 2, children: [
        /* @__PURE__ */ jsx(Typography, { fontSize: 10, mb: 1, children: "Select a category first:" }),
        /* @__PURE__ */ jsx(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 2 }, children: categories.map((category) => /* @__PURE__ */ jsx(
          Chip,
          {
            label: category.category_name,
            size: "small",
            onClick: () => setData({
              ...data,
              category: category.category_name
            }),
            style: {
              backgroundColor: data.category === category.category_name ? "orange" : ""
              // Default color for unselected chips
            }
          },
          category.id
        )) })
      ] }),
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            height: 200,
            width: 320,
            margin: "10px auto",
            backgroundColor: "#dedede",
            borderRadius: 5
          },
          children: data.images.length > 0 && /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                overflowX: "auto",
                whiteSpace: "nowrap",
                maxHeight: "200px",
                borderRadius: 20
              },
              children: data.images.map((image, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  style: {
                    display: "inline-block",
                    marginRight: "10px"
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: URL.createObjectURL(image),
                        alt: `Image ${index}`,
                        style: {
                          maxHeight: "160px"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        style: {
                          display: "block",
                          textAlign: "center",
                          cursor: "pointer",
                          marginTop: "5px"
                        },
                        onClick: () => handleRemoveImage(index),
                        children: /* @__PURE__ */ jsx(DeleteRoundedIcon, { fontSize: "sm" })
                      }
                    )
                  ]
                },
                index
              ))
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsxs("label", { variant: "outlined", className: "change-photo", children: [
        "Add Photo",
        /* @__PURE__ */ jsx(
          "input",
          {
            className: "add-photo-input",
            type: "file",
            name: "images",
            accept: "image/png, image/jpeg, image/webp, image/HEIC",
            multiple: true,
            onChange: handleImageChange,
            style: { display: "none" }
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 2,
            my: 5
          },
          children: [
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Product Name:" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  fullWidth: true,
                  name: "product_name",
                  onChange: handleChange,
                  value: data.product_name,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Price:" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  fullWidth: true,
                  type: "number",
                  name: "price",
                  onChange: handleChange,
                  value: data.price,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Stock:" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  fullWidth: true,
                  type: "number",
                  name: "stock",
                  onChange: handleChange,
                  value: data.stock,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsx(Divider, {}),
            /* @__PURE__ */ jsx(Divider, {}),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Description:" }),
              /* @__PURE__ */ jsx(
                ProductDescriptionEditor,
                {
                  handleChangeDescription,
                  initialValue: data.description
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
                  onClick: handleSubmit,
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
                  children: "Cancel"
                }
              ) })
            ] })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  AddProduct as default
};
