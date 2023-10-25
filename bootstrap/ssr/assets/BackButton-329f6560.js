import { jsx } from "react/jsx-runtime";
import "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined.js";
import { Box, IconButton } from "@mui/material";
function BackButton() {
  const handleGoBack = () => {
    window.history.back();
  };
  return /* @__PURE__ */ jsx(Box, { display: "inline-block", mr: 2, children: /* @__PURE__ */ jsx(IconButton, { onClick: handleGoBack, children: /* @__PURE__ */ jsx(ArrowCircleLeftOutlinedIcon, {}) }) });
}
export {
  BackButton as B
};
