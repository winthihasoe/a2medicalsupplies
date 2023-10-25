import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { U as UserLayout } from "./UserLayout-c9437c70.js";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useForm, Head, router } from "@inertiajs/react";
import { C as CartItemCard } from "./CartItemCard-067c87bb.js";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { N as NewAddressForm } from "./NewAddressForm-fff13033.js";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
import "@mui/icons-material/DeleteRounded.js";
import "@mui/icons-material/Add.js";
import "@mui/icons-material/Remove.js";
function Checkout(props) {
  const carts = props.carts;
  const totalAmount = props.totalAmount;
  const address = props.address;
  const [isAdding, setIsAdding] = useState(false);
  const { data, setData, post, processing, errors, reset } = useForm({
    items: carts,
    address: address == null ? void 0 : address.address,
    city: address == null ? void 0 : address.city,
    phone: address == null ? void 0 : address.phone,
    totalAmount,
    customer_name: ""
  });
  const {
    data: newAddress,
    setData: setNewAddress,
    post: storeNewAddressPost,
    errors: newAddressErrors
  } = useForm({
    address: "",
    city: "",
    phone: ""
  });
  useEffect(() => {
    setData({
      items: carts,
      address: address == null ? void 0 : address.address,
      city: address == null ? void 0 : address.city,
      phone: address == null ? void 0 : address.phone,
      totalAmount
    });
  }, [carts, address, totalAmount]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };
  const handleCustomerName = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    storeNewAddressPost(route("storeAddress"), {
      onSuccess: () => {
        setIsAdding(false);
      },
      newAddress
    });
  };
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!address) {
      alert("Please enter address to deliver");
    } else {
      post(route("placeOrder"), data);
    }
  };
  console.log(data);
  return /* @__PURE__ */ jsxs(UserLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Checkout" }),
    carts.length == 0 ? /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          width: "100%",
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { variant: "h6", fontWeight: 600, mb: 3, children: "You haven't any item." }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "contained",
              size: "small",
              onClick: () => router.visit(route("home")),
              children: "Go to shopping"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsx(Typography, { fontSize: 20, fontWeight: 600, my: 2, children: "Checkout" }),
      /* @__PURE__ */ jsx(Box, { sx: { mb: 2 }, children: /* @__PURE__ */ jsx(
        TextField,
        {
          label: "Customer name",
          size: "small",
          name: "customer_name",
          value: data.customer_name,
          onChange: handleCustomerName
        }
      ) }),
      /* @__PURE__ */ jsxs(Box, { sx: { p: 2, border: "2px dashed #ba7636" }, children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 18, fontWeight: 600, mb: 1, children: "Deliver to:" }),
              address && /* @__PURE__ */ jsx(
                Button,
                {
                  size: "small",
                  onClick: () => setIsAdding(!isAdding),
                  children: "Change address"
                }
              )
            ]
          }
        ),
        !address ? /* @__PURE__ */ jsx(Box, { px: 7, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "contained",
            fullWidth: true,
            onClick: () => setIsAdding(!isAdding),
            size: "small",
            children: "Add New Address"
          }
        ) }) : /* @__PURE__ */ jsxs(Typography, { align: "center", fontSize: 15, children: [
          data.address,
          ", ",
          data.city,
          ", ",
          data.phone
        ] })
      ] }),
      isAdding && /* @__PURE__ */ jsx(
        NewAddressForm,
        {
          data: newAddress,
          handleChange,
          handleSubmit,
          errors: newAddressErrors
        }
      ),
      carts.map((cart) => /* @__PURE__ */ jsx(CartItemCard, { cart }, cart.id)),
      /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            position: "fixed",
            bottom: 0,
            left: 0,
            bgcolor: "#ffffff",
            opacity: "90%",
            width: "100%"
          },
          children: /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                p: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 3
              },
              children: [
                /* @__PURE__ */ jsxs(
                  Typography,
                  {
                    sx: {
                      fontWeight: 900,
                      fontSize: { xs: 14, sm: 16, md: 16 }
                    },
                    children: [
                      "Total Amount:",
                      " ",
                      /* @__PURE__ */ jsx(NumberWithComma, { value: totalAmount }),
                      " Ks"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "contained",
                    onClick: handleSubmitOrder,
                    disabled: processing,
                    children: "Place Order"
                  }
                )
              ]
            }
          )
        }
      )
    ] })
  ] });
}
export {
  Checkout as default
};
