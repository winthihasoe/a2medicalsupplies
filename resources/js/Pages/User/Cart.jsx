import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, Typography } from "@mui/material";
import CartItemCard from "../../components/CartItemCard";
import { Head } from "@inertiajs/react";
import NumberWithComma from "@/components/NumberWithComma";

export default function Cart(props) {
    const carts = props.carts;
    const totalAmount = props.totalAmount;
    return (
        <UserLayout>
            <Head title="Cart" />
            <Typography fontSize={20} fontWeight={400} mt={3}>
                My Cart
            </Typography>
            {carts.map((cart) => (
                <CartItemCard cart={cart} key={cart.id} />
            ))}

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
                        Total Amount: <NumberWithComma value={totalAmount} /> Ks
                    </Typography>
                </Box>
            </Box>
        </UserLayout>
    );
}
