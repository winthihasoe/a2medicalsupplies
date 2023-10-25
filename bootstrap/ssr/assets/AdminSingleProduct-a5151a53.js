import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Box, Typography, TextField, Chip, Grid, Button, Modal, Backdrop, Fade } from "@mui/material";
import { P as ProductDescriptionEditor } from "./ProductDescriptionEditor-cc9b1cd9.js";
import { useForm, Head, router } from "@inertiajs/react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
import "react-quill";
import "react-color";
function AdminSingleProduct(props) {
  const product = props.product;
  const categories = props.categories;
  const {
    data,
    setData,
    post,
    errors,
    progress,
    processing,
    delete: destroy
  } = useForm({
    ...product,
    new_images: []
  });
  const handleImageChange = (e) => {
    const prevImages = data.new_images;
    const selectedImages = Array.from(e.target.files);
    setData({ ...data, new_images: [...prevImages, ...selectedImages] });
  };
  const handleRemoveImage = (index) => {
    const newImages = [...data.images];
    const removeImageName = newImages.splice(index, 1)[0];
    setData({ ...data, images: newImages });
    destroy(route("removeProductImage", removeImageName), data);
  };
  const handleRemoveNewImage = (index) => {
    const newImages = [...data.new_images];
    newImages.splice(index, 1);
    setData({ ...data, new_images: newImages });
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
    post(route("updateProduct", product.id), data);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    router.get(route("adminProducts"));
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    destroy(route("deleteProduct", data.id));
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 3,
    textAlign: "center"
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Single Product", children: [
    /* @__PURE__ */ jsx(Head, { title: product.product_name }),
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          m: 2,
          height: 200,
          backgroundColor: "#e3e3e3",
          borderRadius: 5
        },
        children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              overflowX: "auto",
              whiteSpace: "nowrap",
              maxHeight: "200px",
              borderRadius: 20
            },
            children: [
              data.images.length > 0 && data.images.map((image, index) => /* @__PURE__ */ jsxs(
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
                        src: `/storage/images/products/${image}`,
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
              )),
              data.new_images.map((image, index) => /* @__PURE__ */ jsxs(
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
                        onClick: () => handleRemoveNewImage(index),
                        children: /* @__PURE__ */ jsx(DeleteRoundedIcon, { fontSize: "sm" })
                      }
                    )
                  ]
                },
                index
              ))
            ]
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
          name: "new_images",
          accept: "image/png, image/jpeg, image/webp, image/HEIC",
          multiple: true,
          onChange: handleImageChange,
          style: { display: "none" }
        }
      )
    ] }),
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
                value: data.product_name,
                onChange: handleChange,
                name: "product_name"
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
                value: data.price,
                onChange: handleChange,
                name: "price"
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
                value: data.stock,
                onChange: handleChange,
                name: "stock"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Box, { sx: { display: "flex", flexWrap: "wrap", gap: 1 }, children: categories.map((category) => /* @__PURE__ */ jsx(
            Chip,
            {
              color: data.category == category.category_name ? "primary" : "secondary",
              size: "small",
              label: category.category_name,
              onClick: () => setData({
                ...data,
                category: category.category_name
              })
            },
            category.id
          )) }),
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
          /* @__PURE__ */ jsxs(Grid, { container: true, children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, px: 3, children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "contained",
                size: "small",
                fullWidth: true,
                onClick: handleSubmit,
                disabled: processing,
                children: "Update"
              }
            ) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, px: 3, children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "contained",
                color: "secondary",
                size: "small",
                fullWidth: true,
                onClick: handleCancel,
                children: "Cancel"
              }
            ) })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Box, { px: 6, mb: 5, children: /* @__PURE__ */ jsx(Button, { variant: "outlined", fullWidth: true, onClick: handleOpen, children: "Delete Product" }) }),
    /* @__PURE__ */ jsx(
      Modal,
      {
        "aria-labelledby": "transition-modal-title",
        "aria-describedby": "transition-modal-description",
        open,
        onClose: handleClose,
        closeAfterTransition: true,
        BackdropComponent: Backdrop,
        BackdropProps: {
          timeout: 500
        },
        children: /* @__PURE__ */ jsx(Fade, { in: open, children: /* @__PURE__ */ jsxs(Box, { sx: style, children: [
          /* @__PURE__ */ jsx(
            Typography,
            {
              id: "transition-modal-title",
              variant: "h6",
              component: "h2",
              gutterBottom: true,
              children: "Delete this product?"
            }
          ),
          /* @__PURE__ */ jsx(Typography, { fontSize: 13, align: "center", children: "This process is irreversiable!" }),
          /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                display: "flex",
                gap: 2,
                justifyContent: "center",
                my: 2
              },
              children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "contained",
                    color: "error",
                    onClick: handleDeleteProduct,
                    disabled: processing,
                    size: "small",
                    children: "Yes"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "contained",
                    color: "secondary",
                    onClick: handleClose,
                    size: "small",
                    children: "No"
                  }
                )
              ]
            }
          )
        ] }) })
      }
    )
  ] });
}
export {
  AdminSingleProduct as default
};
