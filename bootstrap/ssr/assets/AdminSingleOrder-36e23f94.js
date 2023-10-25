import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Divider, Grid, Select, MenuItem, Button, Modal, Backdrop, Fade, TextField } from "@mui/material";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { useForm } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
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
function AdminSingleOrder({ order }) {
  const { data, setData, put, errors, processing } = useForm({
    ...order
  });
  const handleChangeStatus = (e) => {
    const newStatus = e.target.value;
    setData({ ...data, status: newStatus });
  };
  const handleSubmitStatus = (e) => {
    e.preventDefault();
    put(route("adminUpdateOrder", order.id), data);
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
  const handleSubmitAddress = (e) => {
    e.preventDefault();
    put(route("updateAddressByAdmin", order.id), data);
  };
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Single Order History", children: [
    /* @__PURE__ */ jsx(Head, { title: "Order detail" }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          p: 2,
          borderRadius: 2,
          backgroundColor: "#efefef",
          width: 250,
          my: 4
        },
        children: [
          /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
            "Customer: ",
            order.user.name
          ] }),
          /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
            "Invoice no: ",
            order.order_number
          ] }),
          /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
            "Order date: ",
            formatDate(order.created_at)
          ] }),
          /* @__PURE__ */ jsxs(Typography, { fontSize: 12, children: [
            "Address: ",
            order.address
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          border: "1px solid #e3e3e3",
          my: 3,
          borderRadius: 2
        },
        children: /* @__PURE__ */ jsx(TableContainer, { children: /* @__PURE__ */ jsxs(Table, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Item" }) }),
            /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Price" }) }),
            /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Qty." }) }),
            /* @__PURE__ */ jsx(TableCell, { align: "left", children: /* @__PURE__ */ jsx(Typography, { fontSize: 11, children: "Amount" }) })
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
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          p: 1,
          my: 4,
          border: "1px solid #e3e3e3",
          borderRadius: 2,
          display: "flex",
          gap: 1,
          alignItems: "center",
          width: 300
        },
        children: [
          /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx("img", { src: "/images/logo.jpg", width: 80 }) }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Phone: 09444845977, 09963851223" }),
            /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "a2pharmacy.mdy@gmail.com" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Divider, {}),
    /* @__PURE__ */ jsxs(Grid, { container: true, children: [
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, align: "center", children: /* @__PURE__ */ jsx(Box, { my: 3, children: /* @__PURE__ */ jsxs(
        Select,
        {
          size: "small",
          value: data.status,
          onChange: handleChangeStatus,
          children: [
            /* @__PURE__ */ jsx(MenuItem, { value: "pending", children: "Pending" }),
            /* @__PURE__ */ jsx(MenuItem, { value: "processing", children: "Processing" }),
            /* @__PURE__ */ jsx(MenuItem, { value: "shipped", children: "Shipped" }),
            /* @__PURE__ */ jsx(MenuItem, { value: "delivered", children: "Delivered" }),
            /* @__PURE__ */ jsx(MenuItem, { value: "cancelled", children: "Cancelled" })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, align: "center", children: /* @__PURE__ */ jsx(Box, { my: 3, children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "contained",
          color: "secondary",
          onClick: handleOpen,
          children: "Edit address"
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx(Box, { px: 5, mb: 4, children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "contained",
        fullWidth: true,
        onClick: handleSubmitStatus,
        disabled: processing || order.status == data.status,
        children: "Save"
      }
    ) }),
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
              children: "Customer address"
            }
          ),
          /* @__PURE__ */ jsx(
            TextField,
            {
              size: "small",
              placeholder: "Your review here ...",
              fullWidth: true,
              multiline: true,
              value: data.address,
              onChange: (e) => setData({ ...data, address: e.target.value })
            }
          ),
          /* @__PURE__ */ jsx(Box, { sx: { mt: 4, mb: 2 }, align: "center", children: /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleSubmitAddress,
              size: "small",
              variant: "contained",
              disabled: processing || order.address == data.address,
              children: "Save"
            }
          ) })
        ] }) })
      }
    )
  ] });
}
export {
  AdminSingleOrder as default
};
