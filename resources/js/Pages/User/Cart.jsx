import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, Typography } from "@mui/material";
import CartItemCard from "../../components/CartItemCard";
import { Head, router, useForm } from "@inertiajs/react";
import NumberWithComma from "@/components/NumberWithComma";

export default function Cart(props) {
    const carts = props.carts;
    const totalAmount = props.totalAmount;

    return (
        <UserLayout>
            <Head title="Cart" />
            {carts.length == 0 ? (
                <Box
                    sx={{
                        width: "100%",
                        height: "70vh",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h6" fontWeight={600} mb={3}>
                        You haven't any item in your cart.
                    </Typography>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => router.visit(route("home"))}
                    >
                        Go to shopping
                    </Button>
                </Box>
            ) : (
                <Box>
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
                            opacity: "90%",
                            bgcolor: "#ffffff",
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
                            <Button
                                variant="contained"
                                onClick={() =>
                                    router.get(route("showCheckout"))
                                }
                            >
                                Checkout
                            </Button>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: 16, sm: 17, md: 18 },
                                }}
                            >
                                Total Amount:
                                <NumberWithComma value={totalAmount} /> Ks
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </UserLayout>
    );
}
