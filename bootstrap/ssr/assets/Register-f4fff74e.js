import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { I as InputError } from "./InputError-eb4bd25e.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { A as ApplicationLogo } from "./ApplicationLogo-e5ab2731.js";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsx(Box, { align: "center", my: 3, children: /* @__PURE__ */ jsx(ApplicationLogo, {}) }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          width: 280,
          margin: "2px auto",
          border: "2px solid #cdcdcd",
          borderRadius: 5,
          py: 2,
          px: 4,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          my: 4
        },
        children: [
          /* @__PURE__ */ jsx(
            Typography,
            {
              align: "center",
              mb: 2,
              fontSize: 22,
              fontWeight: 400,
              children: "Register"
            }
          ),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "name:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                onChange: (e) => setData("name", e.target.value),
                name: "name",
                size: "small",
                type: "text",
                fullWidth: true,
                value: data.name
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.name })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "Email:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                onChange: (e) => setData("email", e.target.value),
                name: "email",
                type: "email",
                size: "small",
                fullWidth: true,
                value: data.email
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.email })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "Phone:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                onChange: (e) => setData("phone", e.target.value),
                name: "phone",
                type: "number",
                size: "small",
                fullWidth: true,
                value: data.phone
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.phone })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "Passowrd:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                onChange: (e) => setData("password", e.target.value),
                name: "password",
                type: "password",
                size: "small",
                fullWidth: true,
                value: data.password
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "Confirm Passowrd:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                onChange: (e) => setData("password_confirmation", e.target.value),
                name: "confirm_password",
                type: "password",
                size: "small",
                fullWidth: true
              }
            ),
            /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation })
          ] }),
          /* @__PURE__ */ jsxs(Typography, { fontSize: 14, children: [
            "Already have an account?",
            " ",
            /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Login!" })
          ] }),
          /* @__PURE__ */ jsx(Box, { px: 6, mb: 3, children: /* @__PURE__ */ jsx(
            Button,
            {
              size: "small",
              fullWidth: true,
              variant: "contained",
              onClick: submit,
              disabled: processing,
              children: "Register"
            }
          ) })
        ]
      }
    )
  ] });
}
export {
  Register as default
};
