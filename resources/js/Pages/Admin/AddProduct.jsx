import ProductDescriptionEditor from "@/components/ProductDescriptionEditor";
import AdminLayout from "@/layouts/AdminLayout";
import { Head, Link, useForm, useRemember } from "@inertiajs/react";
import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function AddProduct(props) {
    const categories = props.categories;
    const { data, setData, post, processing, progress, errors } = useForm({
        product_name: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        images: [],
    });

    const handleImageChange = (e) => {
        const prevImages = data.images;
        const selectedImages = Array.from(e.target.files);
        setData({ ...data, images: [...prevImages, ...selectedImages] });
    };
    const handleRemoveImage = (index) => {
        const newImages = [...data.images];
        newImages.splice(index, 1);
        setFormState({ ...data, images: newImages });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const handleChangeDescription = (value) => {
        setData({
            ...data,
            description: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("storeProduct"), data);
    };

    return (
        <AdminLayout heading={"Add New Product"}>
            <Head title="Add new product" />
            <Container maxWidth="md">
                {categories.length == 0 ? (
                    <Typography fontSize={12} align="center" mb={1}>
                        There is no category. Add new first
                    </Typography>
                ) : (
                    <Box mb={2}>
                        <Typography fontSize={10} mb={1}>
                            Select a category first:
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                            {categories.map((category) => (
                                <Chip
                                    key={category.id}
                                    label={category.category_name}
                                    size="small"
                                    onClick={() =>
                                        setData({
                                            ...data,
                                            category: category.category_name,
                                        })
                                    }
                                    style={{
                                        backgroundColor:
                                            data.category ===
                                            category.category_name
                                                ? "orange" // Change this to the desired color
                                                : "", // Default color for unselected chips
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                )}

                <Box
                    sx={{
                        height: 200,
                        width: 320,
                        margin: "10px auto",
                        backgroundColor: "#dedede",
                        borderRadius: 5,
                    }}
                >
                    {/* I want to add multiple images here  */}

                    {data.images.length > 0 && (
                        <Box>
                            <div
                                style={{
                                    overflowX: "auto",
                                    whiteSpace: "nowrap",
                                    maxHeight: "200px",
                                    borderRadius: 20,
                                }}
                            >
                                {data.images.map((image, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "inline-block",
                                            marginRight: "10px",
                                        }}
                                    >
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Image ${index}`}
                                            style={{
                                                maxHeight: "160px",
                                            }}
                                        />
                                        <span
                                            style={{
                                                display: "block",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                marginTop: "5px",
                                            }}
                                            onClick={() =>
                                                handleRemoveImage(index)
                                            }
                                        >
                                            <DeleteRoundedIcon fontSize="sm" />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Box>
                    )}
                </Box>
                <label variant="outlined" className="change-photo">
                    Add Photo
                    <input
                        className="add-photo-input"
                        type="file"
                        name="images"
                        accept="image/png, image/jpeg, image/webp, image/HEIC"
                        multiple
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />
                </label>
                <Divider />
                <form>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            my: 5,
                        }}
                    >
                        <Box>
                            <Typography fontSize={12}>Product Name:</Typography>
                            <TextField
                                size="small"
                                fullWidth
                                name="product_name"
                                onChange={handleChange}
                                value={data.product_name}
                                required
                            />
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Price:</Typography>
                            <TextField
                                size="small"
                                fullWidth
                                type="number"
                                name="price"
                                onChange={handleChange}
                                value={data.price}
                                required
                            />
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Stock:</Typography>
                            <TextField
                                size="small"
                                fullWidth
                                type="number"
                                name="stock"
                                onChange={handleChange}
                                value={data.stock}
                                required
                            />
                        </Box>
                        <Divider />

                        <Divider />

                        <Box>
                            <Typography fontSize={12}>Description:</Typography>
                            <ProductDescriptionEditor
                                handleChangeDescription={
                                    handleChangeDescription
                                }
                                initialValue={data.description}
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
                                    onClick={handleSubmit}
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
                                >
                                    Cancel
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Container>
        </AdminLayout>
    );
}
