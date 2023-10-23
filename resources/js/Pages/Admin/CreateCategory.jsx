import PopUp from "@/components/PopUp";
import AdminLayout from "@/layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import { Box, Button, Chip, TextField, Typography, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function CreateCategory({ categories }) {
    const {
        data,
        setData,
        post,
        error,
        delete: destroy,
        processing,
        progress,
    } = useForm({
        category_name: "",
    });

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
        setData({ category_name: "" });
    };

    const handleDelete = (e) => {
        e.preventDefault();
        destroy(route("deleteCategory", selectCategory.id), selectCategory);
        setOpen(false);
    };

    const [open, setOpen] = useState(false);
    const [selectCategory, setSelectCategory] = useState(null);

    return (
        <AdminLayout heading={"Category"}>
            <Head title="Category" />

            {/* Showing recent categories section  */}
            <Box
                sx={{
                    my: 2,
                    p: 2,
                    border: "1px solid #dedede",
                    borderRadius: 5,
                }}
            >
                <Typography fontSize={18} fontWeight={600} my={2}>
                    Recent Categories
                </Typography>
                <Box sx={{ p: 1, display: "flex", flexWrap: "wrap", gap: 2 }}>
                    {categories.map((category) => (
                        <Chip
                            key={category.id}
                            label={category.category_name}
                            onDelete={() => {
                                setOpen(true);
                                setSelectCategory(category);
                            }}
                        />
                    ))}
                </Box>
            </Box>

            <PopUp open={open} setOpen={setOpen}>
                <Typography variant="h6" align="center">
                    Delete Category: {selectCategory?.category_name}
                </Typography>
                <Grid container my={2}>
                    <Grid item xs={6} px={3}>
                        <Button
                            variant="contained"
                            size="small"
                            fullWidth
                            onClick={handleDelete}
                            disabled={processing}
                        >
                            Yes
                        </Button>
                    </Grid>
                    <Grid item xs={6} px={3}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            fullWidth
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </PopUp>

            {/* Showing create category form  */}
            <Box
                sx={{
                    my: 2,
                    p: 2,
                    border: "1px solid #dedede",
                    borderRadius: 5,
                }}
            >
                <Typography fontSize={18} fontWeight={600} my={2}>
                    Create New Category
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            my: 2,
                        }}
                    >
                        <Box p={2}>
                            <Typography fontSize={12} mb={1}>
                                Category Name:
                            </Typography>
                            <TextField
                                size="small"
                                fullWidth
                                name="category_name"
                                onChange={handleChange}
                                value={data.category_name}
                                required
                            />
                        </Box>

                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}

                        <Grid container>
                            <Grid item xs={6} px={3}>
                                <Button
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    type="submit"
                                    disabled={processing}
                                >
                                    Save
                                </Button>
                            </Grid>
                            <Grid item xs={6} px={3}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="small"
                                    fullWidth
                                    onClick={() =>
                                        setData({ category_name: "" })
                                    }
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </AdminLayout>
    );
}
