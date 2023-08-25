import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Typography } from "@mui/material";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function AdminProducts() {
    return (
        <AdminLayout heading={"Products"}>
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
                        <Typography fontSize={14} fontWeight={600}>
                            Nursing Manikin
                        </Typography>
                        <InertiaLink href="/admin/single-product">
                            See detail
                        </InertiaLink>
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
                        <Typography fontSize={14} fontWeight={600}>
                            Microscope
                        </Typography>
                        <InertiaLink>See detail</InertiaLink>
                    </Box>
                </Box>
            </Container>
        </AdminLayout>
    );
}
