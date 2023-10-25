import { jsxs, jsx } from "react/jsx-runtime";
import * as React from "react";
import { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar/index.js";
import IconButton from "@mui/material/IconButton/index.js";
import CloseIcon from "@mui/icons-material/Close.js";
import { usePage } from "@inertiajs/react";
import { Alert } from "@mui/material";
function FlashMessage() {
  const [open, setOpen] = React.useState(false);
  const { flash, errors } = usePage().props;
  const numOfErrors = Object.keys(errors).length;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    if (flash.success || flash.error || numOfErrors > 0) {
      setOpen(true);
    }
  }, [flash, errors]);
  const action = /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsx(
    IconButton,
    {
      size: "small",
      "aria-label": "close",
      color: "inherit",
      onClick: handleClose,
      children: /* @__PURE__ */ jsx(CloseIcon, { fontSize: "small" })
    }
  ) });
  return /* @__PURE__ */ jsxs("div", { children: [
    flash.success && open && /* @__PURE__ */ jsx(
      Snackbar,
      {
        open,
        autoHideDuration: 4e3,
        onClose: handleClose,
        action,
        children: /* @__PURE__ */ jsx(
          Alert,
          {
            onClose: handleClose,
            severity: "success",
            sx: { width: "100%" },
            children: flash.success
          }
        )
      }
    ),
    flash.error && open && /* @__PURE__ */ jsx(
      Snackbar,
      {
        open,
        autoHideDuration: 6e3,
        onClose: handleClose,
        action,
        children: /* @__PURE__ */ jsx(
          Alert,
          {
            onClose: handleClose,
            severity: "error",
            sx: { width: "100%" },
            children: flash.error
          }
        )
      }
    ),
    flash.message && open && /* @__PURE__ */ jsx(
      Snackbar,
      {
        open,
        autoHideDuration: 6e3,
        onClose: handleClose,
        action,
        children: /* @__PURE__ */ jsx(
          Alert,
          {
            onClose: handleClose,
            severity: "error",
            sx: { width: "100%" },
            children: flash.message
          }
        )
      }
    )
  ] });
}
export {
  FlashMessage as F
};
