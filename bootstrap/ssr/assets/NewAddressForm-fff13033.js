import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Box, Typography, TextField, Button } from "@mui/material";
function NewAddressForm({
  data,
  handleChange,
  handleSubmit,
  processing,
  errors
}) {
  return /* @__PURE__ */ jsxs(Box, { sx: { my: 2, p: 2, border: "3px dashed blue", borderRadius: 4 }, children: [
    /* @__PURE__ */ jsx(Typography, { fontSize: 18, mb: 1, children: "Deliver to:" }),
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          display: "flex",
          gap: 2,
          flexDirection: "column",
          px: 2
        },
        children: [
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(
              TextField,
              {
                value: data.address,
                size: "small",
                fullWidth: true,
                type: "text",
                multiline: true,
                required: true,
                onChange: handleChange,
                name: "address",
                label: /* @__PURE__ */ jsx(Typography, { fontSize: 11, display: "inline-block", children: "Address" })
              }
            ),
            errors.address && /* @__PURE__ */ jsx(Typography, { ml: 2, fontSize: 12, children: errors.address })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(
              TextField,
              {
                value: data.city,
                size: "small",
                fullWidth: true,
                type: "text",
                multiline: true,
                required: true,
                onChange: handleChange,
                name: "city",
                label: /* @__PURE__ */ jsx(Typography, { fontSize: 11, display: "inline-block", children: "City" })
              }
            ),
            errors.city && /* @__PURE__ */ jsx(Typography, { ml: 2, fontSize: 12, children: errors.city })
          ] }),
          /* @__PURE__ */ jsxs(Box, { children: [
            /* @__PURE__ */ jsx(
              TextField,
              {
                value: data.phone,
                size: "small",
                fullWidth: true,
                required: true,
                onChange: handleChange,
                name: "phone",
                type: "number",
                label: /* @__PURE__ */ jsx(Typography, { fontSize: 11, display: "inline-block", children: "Phone" })
              }
            ),
            errors.phone && /* @__PURE__ */ jsx(Typography, { ml: 2, fontSize: 12, children: errors.phone })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Box, { mt: 2, align: "center", children: /* @__PURE__ */ jsx(
      Button,
      {
        variant: "contained",
        size: "small",
        onClick: handleSubmit,
        disabled: processing,
        children: "Save"
      }
    ) })
  ] });
}
export {
  NewAddressForm as N
};
