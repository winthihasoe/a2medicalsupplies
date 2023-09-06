import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Head, router, useForm } from "@inertiajs/react";
import CartItemCard from "@/components/CartItemCard";
import NumberWithComma from "@/components/NumberWithComma";
import { useState } from "react";
import NewAddressForm from "@/components/User/NewAddressForm";

export default function Checkout(props) {
    const carts = props.carts;
    const totalAmount = props.totalAmount;
    const address = props.address;

    const [isAdding, setIsAdding] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        ...address,
    });

    // Customer fill the Address form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // Customer add new address
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("storeAddress"), {
            onSuccess: () => {
                setData({
                    address: "",
                    city: "",
                    phone: "",
                });
                setIsAdding(false);
            },
            data,
        });
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        post(route("storeOrder"));
    };

    return (
        <UserLayout>
            <Head title="Checkout" />
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
                        You haven't any item.
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
                    <Typography fontSize={20} fontWeight={600} my={2}>
                        Checkout
                    </Typography>
                    <Box sx={{ p: 2, border: "2px dashed #ba7636" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Typography fontSize={18} fontWeight={600} mb={1}>
                                Deliver to:
                            </Typography>
                            <Button
                                size="small"
                                onClick={() => setIsAdding(!isAdding)}
                            >
                                Change address
                            </Button>
                        </Box>
                        {!address.address ? (
                            <Button
                                variant="contained"
                                fullWidth
                                px={4}
                                onClick={() => setIsAdding(!isAdding)}
                            >
                                Add New Address
                            </Button>
                        ) : (
                            <Typography align="center" fontSize={15}>
                                {address.address +
                                    ", " +
                                    address.city +
                                    ", " +
                                    address.phone}
                            </Typography>
                        )}
                    </Box>

                    {/* If the customer want to change the current address, New address form is Here */}
                    {isAdding && (
                        <NewAddressForm
                            data={data}
                            setData={setData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            processing={processing}
                            errors={errors}
                        />
                    )}

                    {carts.map((cart) => (
                        <CartItemCard cart={cart} key={cart.id} />
                    ))}

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
                                Total Amount:{" "}
                                <NumberWithComma value={totalAmount} /> Ks
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={handleSubmitOrder}
                            >
                                Place Order
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
        </UserLayout>
    );
}
