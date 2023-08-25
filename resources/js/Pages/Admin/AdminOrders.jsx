import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Typography } from "@mui/material";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function AdminOrders() {
    return (
        <AdminLayout heading={"Order History"}>
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
                        <InertiaLink
                            className="inertia-link"
                            href="/admin/single-order-history"
                        >
                            <Typography fontSize={14}>
                                HinThar education
                            </Typography>
                        </InertiaLink>
                        <InertiaLink>shipped</InertiaLink>
                    </Box>
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
                        <Typography fontSize={14}>Inv-1234567890</Typography>
                        <InertiaLink>delivered</InertiaLink>
                    </Box>
                </Box>
            </Container>
        </AdminLayout>
    );
}
