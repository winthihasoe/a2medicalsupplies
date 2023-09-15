import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Divider, Typography } from "@mui/material";
import { Head, Link, router } from "@inertiajs/react";

export default function Dashboard({ stockList }) {
    const DashboardMenu = [
        {
            Title: "Order History",
            Button: "See all",
            Link: "adminOrders",
        },
        {
            Title: "Products",
            Button: "See all & edit",
            Link: "adminProducts",
        },
        {
            Title: "Drugs",
            Button: "See all & edit",
            Link: "allDrugs",
        },
        {
            Title: "All Users",
            Button: "See all",
            Link: "allUsers",
        },
    ];
    return (
        <AdminLayout heading={"Dashboard"}>
            <Head title="Dashboard" />
            <Container>
                {/* Stock list is fixed sized box and it will be scrollable inside */}
                <Box
                    sx={{
                        border: "2px solid #dedede",
                        borderRadius: 5,
                        p: 2,
                        my: 2,
                        height: 400,
                        overflowY: "auto",
                    }}
                >
                    <Typography fontSize={22} gutterBottom>
                        Stock list
                    </Typography>
                    {stockList.map((stock) => (
                        <Box
                            sx={{
                                backgroundColor: "#e3e3e3",
                                p: 2,
                                borderRadius: 3,
                                my: 2,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                router.get(
                                    route("adminSingleProduct", stock.id)
                                )
                            }
                        >
                            <Typography fontWeight={600}>
                                {stock.product_name}
                            </Typography>
                            <Typography>{stock.stock} pc</Typography>
                        </Box>
                    ))}
                </Box>
                {DashboardMenu.map((Menu) => (
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                px: 2,
                                my: 3,
                            }}
                        >
                            <Typography fontSize={22}>{Menu.Title}</Typography>
                            <Link href={route(Menu.Link)}>{Menu.Button}</Link>
                        </Box>
                        <Divider />
                    </Box>
                ))}
            </Container>
        </AdminLayout>
    );
}
