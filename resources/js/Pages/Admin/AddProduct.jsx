import ProductDescriptionEditor from "@/components/ProductDescriptionEditor";
import AdminLayout from "@/layouts/AdminLayout";
import { Head, useForm, useRemember } from "@inertiajs/react";
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function AddProduct() {
    const { data, setData, post, processing, progress, errors } = useForm({
        product_name: "",
        price: "",
        description: "",
        category: "teaching material",
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
        setData({ ...data, images: newImages });
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
    console.log(data);
    return (
        <AdminLayout heading={"Add New Product"}>
            <Head title="Add new product" />
            <Container maxWidth="md">
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
                            />
                        </Box>

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
