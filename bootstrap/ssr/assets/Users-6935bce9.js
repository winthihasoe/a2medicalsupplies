import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Head, Link } from "@inertiajs/react";
import { Container, Box, Typography } from "@mui/material";
import "react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function Users({ users }) {
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "All Users", children: [
    /* @__PURE__ */ jsx(Head, { title: "All Users" }),
    /* @__PURE__ */ jsx(Container, { maxWidth: "xs", children: users.map((user) => /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          bgcolor: "#feefee",
          p: 2,
          borderRadius: 3,
          mb: 2
        },
        children: /* @__PURE__ */ jsxs(
          Box,
          {
            display: "flex",
            justifyContent: "space-between",
            mb: 1,
            children: [
              /* @__PURE__ */ jsxs(Box, { children: [
                /* @__PURE__ */ jsx(Link, { href: route("showUser", user.id), children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: user.name }) }),
                /* @__PURE__ */ jsxs(Typography, { fontSize: 12, fontWeight: 600, children: [
                  user.is_admin == 1 && "Admin",
                  user.is_editor == 1 && "Editor"
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Box, { children: [
                /* @__PURE__ */ jsx(Typography, { fontSize: 14, children: user.email }),
                /* @__PURE__ */ jsx(Typography, { align: "right", fontSize: 14, children: user.phone })
              ] })
            ]
          }
        )
      },
      user.id
    )) })
  ] });
}
export {
  Users as default
};
