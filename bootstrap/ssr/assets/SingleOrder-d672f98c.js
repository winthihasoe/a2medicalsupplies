import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AccountLayout } from "./AccountLayout-d71c4777.js";
import { Container, Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Divider, Button, Modal, Backdrop, Fade, TextField } from "@mui/material";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { useForm, Head } from "@inertiajs/react";
import { A as ApplicationLogo } from "./ApplicationLogo-e5ab2731.js";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return new Date(dateString).toLocaleDateString(void 0, options);
};
function SingleOrder(props) {
  const order = props.order;
  const { data, setData, put, processing, errors } = useForm({
    review: order.review_by_customer
  });
  const handleSubmitReview = (e) => {
    e.preventDefault();
    put(route("reviewByCustomer", order.id), data);
    setOpen(false);
  };
  const handleDeleteReview = (e) => {
    e.preventDefault();
    put(route("deleteReview", order.id));
    setOpen(false);
    setData({ review: "" });
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "70%", sm: "50%", md: 390 },
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 4
  };
  return /* @__PURE__ */ jsxs(AccountLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: order.user.name }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
      /* @__PURE__ */ jsxs(Typography, { fontSize: 12, color: "primary", align: "right", children: [
        "Order date: ",
        formatDate(order.created_at)
      ] }),
      /* @__PURE__ */ jsxs(Box, { width: "100%", display: "flex", gap: 2, children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              p: 2,
              borderRadius: 2,
              backgroundColor: "#efefef",
              width: "60%",
              my: 1
            },
            children: [
              /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
                "Customer:",
                " ",
                /* @__PURE__ */ jsx("b", { children: order.customer_name ? order.customer_name : order.user.name })
              ] }),
              /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
                "Address: ",
                /* @__PURE__ */ jsx("i", { children: order.address })
              ] }),
              /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
                "Order status: ",
                order.status
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              p: 2,
              borderRadius: 2,
              border: "2px solid #efefef",
              backgroundColor: "#ffffff",
              width: "20%",
              my: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(ApplicationLogo, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(Typography, { align: "right", fontSize: 12, mt: 1, children: [
        "Invoice no: ",
        order.order_number
      ] }),
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            border: "1px solid #e3e3e3",
            borderRadius: 2,
            width: "100%"
          },
          children: /* @__PURE__ */ jsxs(TableContainer, { children: [
            /* @__PURE__ */ jsxs(Table, { children: [
              /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
                /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Item" }) }),
                /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Price" }) }),
                /* @__PURE__ */ jsx(TableCell, { align: "center", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Qty." }) }),
                /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Amount" }) })
              ] }) }),
              /* @__PURE__ */ jsxs(TableBody, { children: [
                order.order_items.map((item) => /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(
                    Typography,
                    {
                      fontSize: 12,
                      fontWeight: 600,
                      children: item.product.product_name
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs(Typography, { fontSize: 11, children: [
                    /* @__PURE__ */ jsx(
                      NumberWithComma,
                      {
                        value: item.price
                      }
                    ),
                    " "
                  ] }) }),
                  /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: item.qty }) }),
                  /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: /* @__PURE__ */ jsx(
                    NumberWithComma,
                    {
                      value: item.price * item.qty
                    }
                  ) }) })
                ] })),
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsx(TableCell, { rowSpan: 3 }),
                  /* @__PURE__ */ jsx(TableCell, { colSpan: 2, children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Subtotal" }) }),
                  /* @__PURE__ */ jsxs(TableCell, { align: "right", children: [
                    /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: /* @__PURE__ */ jsx(
                      NumberWithComma,
                      {
                        value: order.total_amount
                      }
                    ) }),
                    " "
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(TableRow, { children: [
                  /* @__PURE__ */ jsx(TableCell, { colSpan: 2, children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Total" }) }),
                  /* @__PURE__ */ jsx(TableCell, { align: "right", children: /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
                    /* @__PURE__ */ jsx(
                      NumberWithComma,
                      {
                        value: order.total_amount
                      }
                    ),
                    " ",
                    "Ks"
                  ] }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              Typography,
              {
                fontSize: 13,
                fontWeight: 600,
                align: "center",
                mt: 3,
                children: "Thank you for shopping with us."
              }
            ),
            /* @__PURE__ */ jsx(Typography, { fontSize: 11, align: "center", mb: 3, children: /* @__PURE__ */ jsx("i", { children: "Items sold are not exchangable." }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            my: 2,
            border: "1px solid #e3e3e3",
            borderRadius: 2,
            display: "flex",
            gap: 1,
            alignItems: "center",
            width: "100%"
          },
          children: [
            /* @__PURE__ */ jsx(Box, { width: "25%", display: "flex", justifyContent: "center", children: /* @__PURE__ */ jsx(ApplicationLogo, {}) }),
            /* @__PURE__ */ jsxs(Box, { align: "center", children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Phone: 09444845977, 09963851223" }),
              /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "a2pharmacy.mdy@gmail.com" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Divider, {}),
      order.review_by_customer && /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            width: "100%",
            my: 2,
            borderRadius: 3,
            backgroundColor: "#ba7636"
          },
          children: /* @__PURE__ */ jsxs(Box, { p: 2, children: [
            /* @__PURE__ */ jsx(Typography, { color: "white", fontSize: 14, mb: 1, children: "Your Review:" }),
            /* @__PURE__ */ jsx(Typography, { color: "white", fontSize: 13, children: /* @__PURE__ */ jsx("q", { children: data.review }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(Box, { px: 5, my: 2, children: /* @__PURE__ */ jsx(Button, { variant: "outlined", fullWidth: true, onClick: handleOpen, children: order.review_by_customer == null ? " Review this order" : "Edit my review" }) }),
      /* @__PURE__ */ jsx(
        Modal,
        {
          open,
          onClose: handleClose,
          closeAfterTransition: true,
          slots: { backdrop: Backdrop },
          slotProps: {
            backdrop: {
              timeout: 500
            }
          },
          children: /* @__PURE__ */ jsx(Fade, { in: open, children: /* @__PURE__ */ jsxs(Box, { sx: style, children: [
            /* @__PURE__ */ jsx(
              Typography,
              {
                id: "transition-modal-title",
                variant: "h6",
                component: "h2",
                mb: 2,
                children: "Review this order"
              }
            ),
            /* @__PURE__ */ jsx(
              TextField,
              {
                size: "small",
                placeholder: "Your review here ...",
                fullWidth: true,
                multiline: true,
                value: data.review,
                onChange: (e) => setData({ review: e.target.value })
              }
            ),
            /* @__PURE__ */ jsx(Box, { sx: { mt: 4, mb: 2 }, align: "center", children: /* @__PURE__ */ jsx(
              Button,
              {
                onClick: handleSubmitReview,
                size: "small",
                variant: "contained",
                disabled: processing,
                children: "Save"
              }
            ) }),
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
              Button,
              {
                color: "error",
                onClick: handleDeleteReview,
                disabled: processing,
                children: "Delete Review"
              }
            ) })
          ] }) })
        }
      )
    ] })
  ] });
}
export {
  SingleOrder as default
};
