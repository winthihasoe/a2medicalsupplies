import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { Alert } from "@mui/material";

export default function FlashMessage() {
    const [open, setOpen] = React.useState(false);
    const { flash, errors } = usePage().props;
    const numOfErrors = Object.keys(errors).length;

    const handleClick = () => {
        setOpen(true);
    };

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

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
            {flash.success && open && (
                <Snackbar
                    open={open}
                    autoHideDuration={4000}
                    onClose={handleClose}
                    action={action}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{ width: "100%" }}
                    >
                        {flash.success}
                    </Alert>
                </Snackbar>
            )}
            {flash.error && open && (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    action={action}
                >
                    <Alert
                        onClose={handleClose}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        {flash.error}
                    </Alert>
                </Snackbar>
            )}
            {flash.message && open && (
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    action={action}
                >
                    <Alert
                        onClose={handleClose}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        {flash.message}
                    </Alert>
                </Snackbar>
            )}
        </div>
    );
}
