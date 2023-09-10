import React from "react";
import {
    Backdrop,
    Box,
    Button,
    Fade,
    Grid,
    TextField,
    Typography,
    Modal,
} from "@mui/material";

export default function PopUp({ children, open, setOpen }) {
    // For model open and close
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
        textAlign: "center",
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>{children}</Box>
            </Fade>
        </Modal>
    );
}
