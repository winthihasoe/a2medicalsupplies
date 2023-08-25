import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import { Box, Container, Divider, Typography } from "@mui/material";
import BackButton from "../../components/BackButton";
import { Head, InertiaLink } from "@inertiajs/inertia-react";

export default function MyOrders() {
    return (
        <AccountLayout>
            <Head title="Orders" />
            <Container>
                <Box mb={2}>
                    <Typography fontSize={20} fontWeight={700}>
                        <BackButton /> My Orders
                    </Typography>
                </Box>
                <Divider />
                <Box
                    sx={{
                        border: "1px solid #000000",
                        p: 2,
                        borderRadius: 4,
                        my: 3,
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
                            Inv-1234567890
                        </Typography>
                        <InertiaLink href="/my-single-order">view</InertiaLink>
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
                            Inv-1234567890
                        </Typography>
                        <InertiaLink>view</InertiaLink>
                    </Box>
                </Box>
            </Container>
        </AccountLayout>
    );
}
