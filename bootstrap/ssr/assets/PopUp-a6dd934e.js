import { jsx } from "react/jsx-runtime";
import "react";
import { Modal, Backdrop, Fade, Box } from "@mui/material";
function PopUp({ children, open, setOpen }) {
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    borderRadius: 3,
    boxShadow: 24,
    p: 3,
    textAlign: "center"
  };
  return /* @__PURE__ */ jsx(
    Modal,
    {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      open,
      onClose: handleClose,
      closeAfterTransition: true,
      BackdropComponent: Backdrop,
      BackdropProps: {
        timeout: 500
      },
      children: /* @__PURE__ */ jsx(Fade, { in: open, children: /* @__PURE__ */ jsx(Box, { sx: style, children }) })
    }
  );
}
export {
  PopUp as P
};
