import { jsx } from "react/jsx-runtime";
import { Typography } from "@mui/material";
function InputError({ message, className = "", ...props }) {
  return message ? /* @__PURE__ */ jsx(Typography, { fontSize: 12, ...props, color: "error", children: message }) : null;
}
export {
  InputError as I
};
