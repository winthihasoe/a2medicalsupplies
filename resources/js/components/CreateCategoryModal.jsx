import { useForm } from "@inertiajs/inertia-react";
import {
    Backdrop,
    Box,
    Button,
    Fade,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function CreateCategoryModal() {
    const { data, setData, processing, errors, post } = useForm({
        category_name: "",
    });
    // For model open and close
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "70%", sm: "60%", md: 390 },
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 24,
        p: 3,
        textAlign: "center",
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("addCategory"), data);
    };
    console.log(data);
    return (
        <Box>
            <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={handleOpen}
            >
                Add New Category
            </Button>

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
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                            gutterBottom
                        >
                            Create New Category
                        </Typography>
                        <Box sx={{ p: 2 }}>
                            <TextField
                                fullWidth
                                size="small"
                                value={data.category_name}
                                onChange={handleChange}
                                name="category_name"
                                label={
                                    <Typography fontSize={13}>
                                        Category name
                                    </Typography>
                                }
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleClose}
                                size="small"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                                disabled={processing}
                                size="small"
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
