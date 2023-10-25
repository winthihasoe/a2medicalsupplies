import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Divider, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function AdminOrders({ orders }) {
    const [currentPage, setCurrentPage] = useState(orders.current_page);
    const handleChange = (event, page) => {
        setCurrentPage(page);
        router.get(`order-history?page=${page}`);
    };

    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    console.log(orders);
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
                                p: 2,
                                my: 2,
                                backgroundColor: "#efefef",
                                borderRadius: 4,
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                router.visit(
                                    route("adminSingleOrder", order.id)
                                )
                            }
                            key={order.id}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Typography fontSize={10}>
                                    {formatDate(order.created_at)}
                                </Typography>
                                <Box>
                                    <Link
                                        href={route(
                                            "adminSingleOrder",
                                            order.id
                                        )}
                                    >
                                        {order.status}
                                    </Link>
                                </Box>
                            </Box>
                            <Divider />

                            <Box>
                                <Typography fontSize={14} fontWeight={600}>
                                    {order.user.name}
                                </Typography>
                                {order.order_items.map((item, index) => (
                                    <Typography
                                        fontSize={10}
                                        display="inline-block"
                                        key={index}
                                    >
                                        {item.product.product_name},
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    ))}
                    {orders.data.length == 0 ? (
                        <Typography
                            variant="h6"
                            fontWeight={600}
                            align="center"
                            mt={5}
                        >
                            No orders right now!
                        </Typography>
                    ) : (
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
                    )}
                </Box>
            </Container>
        </AdminLayout>
    );
}
