import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AccountLayout } from "./AccountLayout-d71c4777.js";
import { Container, Box, Typography, Fab } from "@mui/material";
import { B as BackButton } from "./BackButton-329f6560.js";
import { useForm, Head } from "@inertiajs/react";
import { N as NewAddressForm } from "./NewAddressForm-fff13033.js";
import AddIcon from "@mui/icons-material/Add.js";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
function Address(props) {
  const addresses = props.addresses;
  const { data, setData, post, processing, errors, reset } = useForm({
    address: "",
    city: "",
    phone: ""
  });
  const [isAdding, setIsAdding] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("storeAddress"), {
      onSuccess: () => {
        setData({
          address: "",
          city: "",
          phone: ""
        });
      },
      data
    });
  };
  return /* @__PURE__ */ jsxs(AccountLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Address" }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
      /* @__PURE__ */ jsxs(
        Box,
        {
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          children: [
            /* @__PURE__ */ jsxs(Typography, { fontSize: 20, fontWeight: 700, children: [
              /* @__PURE__ */ jsx(BackButton, {}),
              " My Address"
            ] }),
            /* @__PURE__ */ jsx(
              Fab,
              {
                color: "primary",
                "aria-label": "add",
                size: "small",
                onClick: () => setIsAdding(!isAdding),
                children: /* @__PURE__ */ jsx(AddIcon, {})
              }
            )
          ]
        }
      ),
      isAdding && /* @__PURE__ */ jsx(Box, { width: "90%", margin: "20px auto", children: /* @__PURE__ */ jsx(
        NewAddressForm,
        {
          data,
          setData,
          handleChange,
          handleSubmit,
          processing,
          errors
        }
      ) }),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            width: "90%",
            margin: "30px auto",
            p: 2,
            border: "2px solid #dedede"
          },
          children: [
            /* @__PURE__ */ jsx(Typography, { fontSize: 18, mb: 2, children: /* @__PURE__ */ jsx("u", { children: "My previous address" }) }),
            /* @__PURE__ */ jsx("ul", { children: addresses.map((address) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Typography, { my: 1, children: address.address + ", " + address.city + ", " + address.phone }) })) })
          ]
        }
      )
    ] })
  ] });
}
export {
  Address as default
};
