import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import BackButton from "../../components/BackButton";
import { Head, Link, router } from "@inertiajs/react";

export default function MyOrders(props) {
    const orders = props.orders;
    return (
        <AccountLayout>
            <Head title="Orders" />
            <Container maxWidth="xs">
                <Box mb={2}>
                    <Typography fontSize={20} fontWeight={700}>
                        <BackButton /> My Orders
                    </Typography>
                </Box>
                <Divider />
                {orders.length == 0 ? (
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
                            You have no order!
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
                    <Box
                        sx={{
                            border: "1px solid #000000",
                            p: 2,
                            borderRadius: 4,
                            my: 3,
                        }}
                    >
                        {orders.map((order) => (
                            <Box
                                key={order.id}
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
                                    {order.order_number}
                                </Typography>
                                <Link href={route("singleOrder", order.id)}>
                                    view
                                </Link>
                            </Box>
                        ))}
                    </Box>
                )}
            </Container>
        </AccountLayout>
    );
}
