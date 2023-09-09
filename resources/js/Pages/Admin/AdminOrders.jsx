import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function AdminOrders({ orders }) {
    const [currentPage, setCurrentPage] = useState(orders.current_page);
    const handleChange = (event, page) => {
        setCurrentPage(page);
        router.get(`order-history?page=${page}`);
    };
    return (
        <AdminLayout heading={"Order History"}>
            <Head title="Order History" />
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
                    {orders.data.map((order) => (
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
                            <Link
                                className="inertia-link"
                                href={route("adminSingleOrder", order.id)}
                            >
                                <Typography fontSize={14}>
                                    {order.user.name}
                                </Typography>
                            </Link>
                            <Link href={route("adminSingleOrder", order.id)}>
                                {order.status}
                            </Link>
                        </Box>
                    ))}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            my: 3,
                        }}
                    >
                        <Pagination
                            count={orders.last_page}
                            page={currentPage}
                            onChange={handleChange}
                            variant="contained"
                        />
                    </Box>
                </Box>
            </Container>
        </AdminLayout>
    );
}
