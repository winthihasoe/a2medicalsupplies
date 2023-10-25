import { jsxs, jsx } from "react/jsx-runtime";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { useForm, Head } from "@inertiajs/react";
import { Box, Typography, Divider, Button, FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function UserDetail({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const { data, setData, put, errors } = useForm({
    ...user
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("updateRole", user.id), data);
    setIsEditing(false);
  };
  console.log(data);
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "User Detail", children: [
    /* @__PURE__ */ jsx(Head, { title: user.name }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          bgcolor: "#feefee",
          px: 8,
          py: 2,
          borderRadius: 3,
          mb: 2
        },
        children: [
          /* @__PURE__ */ jsx(Typography, { fontSize: 13, mt: 4, children: "Name:" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, mb: 2, children: user.name }),
          /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Email:" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, mb: 2, children: user.email }),
          /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Phone:" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, mb: 2, children: user.phone }),
          /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Admin:" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, mb: 2, children: user.is_admin == 1 ? "Yes" : "No" }),
          /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 13, children: "Editor:" }),
          /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, mb: 2, children: user.is_editor == 1 ? "Yes" : "No" }),
          /* @__PURE__ */ jsx(Divider, { variant: "inset" }),
          /* @__PURE__ */ jsx(Box, { textAlign: "center", sx: { my: 2 }, children: /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outlined",
              onClick: () => setIsEditing(!isEditing),
              size: "small",
              children: "Change Role"
            }
          ) }),
          isEditing && /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
            /* @__PURE__ */ jsxs(FormControl, { sx: { mt: 1, mb: 2, minWidth: 250 }, children: [
              /* @__PURE__ */ jsx("label", { id: "admin", children: "Change to admin?" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  labelId: "admin",
                  id: "admin",
                  value: data.is_admin,
                  name: "is_admin",
                  onChange: handleChange,
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: 1, children: "Yes" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: 0, children: "No" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(FormControl, { sx: { mt: 1, mb: 2, minWidth: 250 }, children: [
              /* @__PURE__ */ jsx("label", { id: "editor", children: "Change to editor?" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  labelId: "editor",
                  id: "editor",
                  value: data.is_editor,
                  name: "is_editor",
                  onChange: handleChange,
                  size: "small",
                  children: [
                    /* @__PURE__ */ jsx(MenuItem, { value: 1, children: "Yes" }),
                    /* @__PURE__ */ jsx(MenuItem, { value: 0, children: "No" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Box, { textAlign: "center", mb: 4, children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "contained",
                  type: "submit",
                  color: "success",
                  children: "Save"
                }
              ),
              /* @__PURE__ */ jsx(Button, { onClick: () => setIsEditing(false), children: "Cancel" })
            ] })
          ] })
        ]
      },
      user.id
    )
  ] });
}
export {
  UserDetail as default
};
