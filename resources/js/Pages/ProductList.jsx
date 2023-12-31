import BackButton from "@/components/BackButton";
import NumberWithComma from "@/components/NumberWithComma";
import UserLayout from "@/layouts/UserLayout";
import { Head, router } from "@inertiajs/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function ProductList(props) {
    const products = props.products;
    return (
        <UserLayout>
            <Head title="Products" />
            <Container maxWidth="sm">
                <BackButton />
                {products.length == 0 ? (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        height="70vh"
                    >
                        <Typography fontSize={18} fontWeight={600}>
                            Products are coming soon ...
                        </Typography>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-around",
                            alignItems: "center",
                            px: 2,
                            py: 3,
                            my: 2,
                            backgroundColor: "#efefef",
                            borderRadius: 4,
                            gap: 2,
                        }}
                    >
                        {products.map((product) => (
                            <Box
                                key={product.id}
                                sx={{
                                    border: "1px solid #ba7636",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    width: "80%",
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    router.get(
                                        route("singleProduct", product.id)
                                    )
                                }
                            >
                                <Box>
                                    <img
                                        src={`/storage/images/products/${product.images[0]}`}
                                        width="100%"
                                    />
                                </Box>
                                <Box p={2}>
                                    <Typography fontSize={13}>
                                        {product.product_name}
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        fontSize={15}
                                        fontWeight={600}
                                    >
                                        <NumberWithComma
                                            value={product.price}
                                        />{" "}
                                        Ks
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                )}
            </Container>
        </UserLayout>
    );
}
