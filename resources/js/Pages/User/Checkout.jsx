import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import CartItemCard from "../../components/CartItemCard";
import { Head } from "@inertiajs/inertia-react";

export default function Checkout() {
    return (
        <UserLayout>
            <Head title="Checkout" />
            <Box sx={{ p: 3, border: "2px dashed #ba7636" }}>
                <Typography fontSize={20} fontWeight={600} my={1}>
                    Deliver to:
                </Typography>
                <TextField variant="standard" fullWidth />
                <Box mt={2} align="center">
                    <Button variant="contained">Save Address</Button>
                </Box>
            </Box>
            <Typography fontSize={20} fontWeight={400} mt={3}>
                Checkout
            </Typography>
            <CartItemCard />

            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
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
                    <Typography
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: 16, sm: 17, md: 18 },
                        }}
                    >
                        Total Amount: 1,650,000 Ks
                    </Typography>
                    <Button variant="contained">Place Order</Button>
                </Box>
            </Box>
        </UserLayout>
    );
}
