import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Head, router, useForm } from "@inertiajs/react";
import CartItemCard from "@/components/CartItemCard";
import NumberWithComma from "@/components/NumberWithComma";
import { useState } from "react";
import NewAddressForm from "@/components/User/NewAddressForm";
import { useEffect } from "react";

export default function Checkout(props) {
    const carts = props.carts;
    const totalAmount = props.totalAmount;
    const address = props.address;

    const [isAdding, setIsAdding] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        items: carts,
        address: address?.address,
        city: address?.city,
        phone: address?.phone,
        totalAmount: totalAmount,
        customer_name: "",
    });

    // IF the customer hasn't address, new address form and its state
    const {
        data: newAddress,
        setData: setNewAddress,
        post: storeNewAddressPost,
        errors: newAddressErrors,
    } = useForm({
        address: "",
        city: "",
        phone: "",
    });

    useEffect(() => {
        setData({
            items: carts,
            address: address?.address,
            city: address?.city,
            phone: address?.phone,
            totalAmount: totalAmount,
        });
    }, [carts, address, totalAmount]);

    // Customer fill the Address form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    const handleCustomerName = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // Customer add new address
    const handleSubmit = (e) => {
        e.preventDefault();
        storeNewAddressPost(route("storeAddress"), {
            onSuccess: () => {
                setIsAdding(false);
            },
            newAddress,
        });
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        if (!address) {
            alert("Please enter address to deliver");
        } else {
            post(route("placeOrder"), data);
        }
    };
    console.log(data);

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
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="Customer name"
                            size="small"
                            name="customer_name"
                            value={data.customer_name}
                            onChange={handleCustomerName}
                        />
                    </Box>
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
                            {address && (
                                <Button
                                    size="small"
                                    onClick={() => setIsAdding(!isAdding)}
                                >
                                    Change address
                                </Button>
                            )}
                        </Box>
                        {!address ? (
                            <Box px={7}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    onClick={() => setIsAdding(!isAdding)}
                                    size="small"
                                >
                                    Add New Address
                                </Button>
                            </Box>
                        ) : (
                            <Typography align="center" fontSize={15}>
                                {data.address}, {data.city}, {data.phone}
                            </Typography>
                        )}
                    </Box>

                    {/* If the customer want to change the current address, New address form is Here */}
                    {isAdding && (
                        <NewAddressForm
                            data={newAddress}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            errors={newAddressErrors}
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
                            bgcolor: "#ffffff",
                            opacity: "90%",
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
                                    fontSize: { xs: 14, sm: 16, md: 16 },
                                }}
                            >
                                Total Amount:{" "}
                                <NumberWithComma value={totalAmount} /> Ks
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={handleSubmitOrder}
                                disabled={processing}
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
