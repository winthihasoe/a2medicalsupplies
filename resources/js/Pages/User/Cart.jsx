import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, Typography } from "@mui/material";
import CartItemCard from "../../components/CartItemCard";
import { Head } from "@inertiajs/inertia-react";

export default function Cart() {
    return (
        <UserLayout>
            <Head title="Cart" />
            <Typography fontSize={20} fontWeight={400} mt={3}>
                My Cart
            </Typography>
            <CartItemCard />

            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    opacity: "80%",
                }}
            >
                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Button variant="contained">Checkout</Button>
                    <Typography
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: 16, sm: 17, md: 18 },
                        }}
                    >
                        Total Amount: 1,650,000 Ks
                    </Typography>
                </Box>
            </Box>
        </UserLayout>
    );
}
