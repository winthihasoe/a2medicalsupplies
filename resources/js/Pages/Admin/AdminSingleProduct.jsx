import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ProductDescriptionEditor from "../../components/ProductDescriptionEditor";
import { Head, router, useForm } from "@inertiajs/react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { asset } from "@inertiajs/inertia";

export default function AdminSingleProduct(props) {
    const product = props.product;
    const {
        data,
        setData,
        post,
        errors,
        progress,
        processing,
        delete: destroy,
    } = useForm({
        ...product,
        new_images: [],
    });

    const handleImageChange = (e) => {
        const prevImages = data.new_images;
        const selectedImages = Array.from(e.target.files);
        setData({ ...data, new_images: [...prevImages, ...selectedImages] });
    };

    const handleRemoveImage = (index) => {
        const newImages = [...data.images];
        const removeImageName = newImages.splice(index, 1)[0];
        setData({ ...data, images: newImages });
        destroy(route("removeProductImage", removeImageName), data.id);
    };

    const handleRemoveNewImage = (index) => {
        const newImages = [...data.new_images];
        newImages.splice(index, 1);
        setData({ ...data, new_images: newImages });
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
        post(route("updateProduct", product.id), data);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        router.get(route("adminProducts"));
    };

    console.log(data);
    return (
        <AdminLayout heading={"Single Product"}>
            <Head title={product.product_name} />
            <Box
                sx={{
                    m: 2,
                    height: 200,
                    backgroundColor: "#e3e3e3",
                    borderRadius: 5,
                }}
            >
                <Box>
                    <div
                        style={{
                            overflowX: "auto",
                            whiteSpace: "nowrap",
                            maxHeight: "200px",
                            borderRadius: 20,
                        }}
                    >
                        {data.images.length > 0 &&
                            data.images.map((image, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "inline-block",
                                        marginRight: "10px",
                                    }}
                                >
                                    <img
                                        src={`/storage/images/products/${image}`}
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
                                        onClick={() => handleRemoveImage(index)}
                                    >
                                        <DeleteRoundedIcon fontSize="sm" />
                                    </span>
                                </div>
                            ))}

                        {data.new_images.map((image, index) => (
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
                                    onClick={() => handleRemoveNewImage(index)}
                                >
                                    <DeleteRoundedIcon fontSize="sm" />
                                </span>
                            </div>
                        ))}
                    </div>
                </Box>
            </Box>
            <label variant="outlined" className="change-photo">
                Add Photo
                <input
                    className="add-photo-input"
                    type="file"
                    name="new_images"
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
                            value={data.product_name}
                            onChange={handleChange}
                            name="product_name"
                        />
                    </Box>
                    <Box>
                        <Typography fontSize={12}>Price:</Typography>
                        <TextField
                            size="small"
                            fullWidth
                            type="number"
                            value={data.price}
                            onChange={handleChange}
                            name="price"
                        />
                    </Box>

                    <Box>
                        <Typography fontSize={12}>Description:</Typography>
                        <ProductDescriptionEditor
                            handleChangeDescription={handleChangeDescription}
                            initialValue={data.description}
                        />
                    </Box>

                    <Grid container>
                        <Grid item xs={6} px={3}>
                            <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                onClick={handleSubmit}
                                disabled={processing}
                            >
                                Update
                            </Button>
                        </Grid>
                        <Grid item xs={6} px={3}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                fullWidth
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <Box px={6}>
                <Button variant="outlined" fullWidth>
                    Delete Product
                </Button>
            </Box>
        </AdminLayout>
    );
}
