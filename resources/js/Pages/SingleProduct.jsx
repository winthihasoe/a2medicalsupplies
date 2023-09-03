import NumberWithComma from "@/components/NumberWithComma";
import AccountLayout from "@/layouts/AccountLayout";
import { Head, useForm, usePage } from "@inertiajs/react";
import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Typography,
} from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SingleProduct(props) {
    const product = props.product;
    const user = usePage().props.auth.user;
    const { data, post, errors, processing } = useForm({
        product_id: product.id,
        user_id: user.id,
        qty: 1,
    });
    const handleAddToCart = (e) => {
        e.preventDefault();
        post(route("addToCart"), data);
    };
    console.log(data);
    return (
        <AccountLayout>
            <Head title={product.product_name} />
            <Container maxWidth="xs">
                <Carousel
                    dynamicHeight={true}
                    infiniteLoop={true}
                    showThumbs={false}
                >
                    {product.images.map((image, index) => (
                        <Box
                            sx={{
                                borderRadius: 3,
                                overflow: "hidden",
                            }}
                            key={index}
                        >
                            <img src={`/storage/images/products/${image}`} />
                        </Box>
                    ))}
                </Carousel>
                <Divider />
                <Box
                    sx={{
                        my: 2,
                        display: "flex",
                        gap: 2,
                        flexDirection: "column",
                    }}
                >
                    <Typography fontSize={15} fontWeight={600}>
                        {product.product_name}{" "}
                        {product.stock == 0 && (
                            <Chip
                                label={
                                    <Typography fontSize={12} fontWeight={400}>
                                        Preorder only
                                    </Typography>
                                }
                                size="small"
                                color="primary"
                            />
                        )}
                    </Typography>
                    <Typography fontSize={17} fontWeight={600} color="primary">
                        <NumberWithComma value={product.price} /> Ks
                    </Typography>
                    <Divider />
                    <Box>
                        <Typography>Description</Typography>
                        <Typography
                            px={1}
                            fontSize={13}
                            dangerouslySetInnerHTML={{
                                __html: product.description.replace(
                                    /<img/g,
                                    '<img style="max-width: 80%; height: auto;"'
                                ),
                            }}
                        />
                    </Box>
                </Box>
            </Container>
            <Box
                sx={{
                    position: "sticky",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 1,
                }}
            >
                <Box
                    p={2}
                    display="flex"
                    justifyContent="space-around"
                    alignContent="center"
                    gap={2}
                    px={4}
                    bgcolor="#dedede"
                >
                    <Button variant="outlined" fullWidth>
                        Quotation
                    </Button>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleAddToCart}
                    >
                        Order Now
                    </Button>
                </Box>
            </Box>
        </AccountLayout>
    );
}
