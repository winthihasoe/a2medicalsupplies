import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { I as InputError } from "./InputError-eb4bd25e.js";
import { useForm, Head, Link } from "@inertiajs/react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import { A as ApplicationLogo } from "./ApplicationLogo-e5ab2731.js";
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const buttonRef = useRef();
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      buttonRef.current.click();
    }
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Login" }),
    /* @__PURE__ */ jsx(Box, { align: "center", my: 3, children: /* @__PURE__ */ jsx(ApplicationLogo, {}) }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs(
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
          gap: 3
        },
        children: [
          /* @__PURE__ */ jsx(
            Typography,
            {
              align: "center",
              mb: 2,
              fontSize: 22,
              fontWeight: 400,
              children: "Login"
            }
          ),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "Email:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                size: "small",
                fullWidth: true,
                onChange: (e) => setData("email", e.target.value),
                value: data.email,
                type: "email"
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.email,
                className: "mt-2 text-xs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(Typography, { children: "Passowrd:" }),
            /* @__PURE__ */ jsx(
              TextField,
              {
                size: "small",
                fullWidth: true,
                onChange: (e) => setData("password", e.target.value),
                type: "password",
                value: data.password
              }
            ),
            /* @__PURE__ */ jsx(
              InputError,
              {
                message: errors.password,
                className: "mt-2"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(Typography, { fontSize: 14, children: [
            "Don't have an account?",
            " ",
            /* @__PURE__ */ jsx(Link, { href: route("register"), children: "Create one" })
          ] }),
          /* @__PURE__ */ jsx(Box, { px: 6, mb: 3, children: /* @__PURE__ */ jsx(
            Button,
            {
              disabled: processing,
              size: "small",
              fullWidth: true,
              variant: "contained",
              type: "submit",
              ref: buttonRef,
              onKeyDown: handleKeyPress,
              children: "Login"
            }
          ) })
        ]
      }
    ) })
  ] });
}
export {
  Login as default
};
