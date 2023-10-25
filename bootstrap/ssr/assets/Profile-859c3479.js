import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AccountLayout } from "./AccountLayout-d71c4777.js";
import { Container, Box, Typography, Divider, TextField, Button } from "@mui/material";
import { B as BackButton } from "./BackButton-329f6560.js";
import { useForm, Head } from "@inertiajs/react";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
function Profile(props) {
  const user = props.user;
  const { data, setData, post, errors, processing } = useForm({
    ...user,
    current_password: "",
    password: "",
    password_confirmation: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSave = (e) => {
    e.preventDefault();
    post(route("updateUser", user.id), data);
  };
  console.log(errors);
  return /* @__PURE__ */ jsxs(AccountLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
      /* @__PURE__ */ jsx(Box, { mb: 2, children: /* @__PURE__ */ jsxs(Typography, { fontSize: 20, fontWeight: 700, children: [
        /* @__PURE__ */ jsx(BackButton, {}),
        " Profile"
      ] }) }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsx("form", { children: /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            my: 5
          },
          children: [
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Name: *" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  value: data.name,
                  onChange: handleChange,
                  name: "name",
                  type: "text",
                  required: true
                }
              ),
              errors.name && /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: errors.name })
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Email: *" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  value: data.email,
                  onChange: handleChange,
                  name: "email",
                  type: "email",
                  required: true
                }
              ),
              errors.email && /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: errors.email })
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Phone: *" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  value: data.phone,
                  onChange: handleChange,
                  name: "phone",
                  type: "number",
                  required: true
                }
              ),
              errors.phone && /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: errors.phone })
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Current Password:" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  name: "current_password",
                  type: "password",
                  value: data.current_password,
                  onChange: handleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "New Password:" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  name: "password",
                  type: "password",
                  value: data.password,
                  onChange: handleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Box, { children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 12, children: "Confirm Password:" }),
              /* @__PURE__ */ jsx(
                TextField,
                {
                  size: "small",
                  name: "password_confirmation",
                  type: "password",
                  value: data.password_confirmation,
                  onChange: handleChange
                }
              )
            ] }),
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(Typography, { fontSize: 12, color: "red", children: errors.password }) }),
            /* @__PURE__ */ jsx(Box, { width: "100%", align: "center", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "contained",
                size: "small",
                onClick: handleSave,
                children: "Save"
              }
            ) })
          ]
        }
      ) })
    ] })
  ] });
}
export {
  Profile as default
};
