import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Head, Link } from "@inertiajs/react";

export default function AdminProducts(props) {
    const products = props.products;
    return (
        <AdminLayout heading={"Products"}>
            <Head title="Product list" />
            <Container>
                <Box
                    sx={{
                        border: "1px solid #000000",
                        p: 2,
                        my: 2,
                        borderRadius: 5,
                        minHeight: "80vh",
                    }}
                >
                    <Typography fontSize={20} mb={1}>
                        Product list
                    </Typography>
                    <Divider />
                    {products.map((product, i) => (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                p: 2,
                                my: 2,
                                backgroundColor: "#efefef",
                                borderRadius: 4,
                            }}
                        >
                            <Typography fontSize={14} fontWeight={600}>
                                {i + 1}
                                {". "} {product.product_name}
                            </Typography>
                            <Link
                                href={route("adminSingleProduct", product.id)}
                            >
                                See detail
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Container>
        </AdminLayout>
    );
}
