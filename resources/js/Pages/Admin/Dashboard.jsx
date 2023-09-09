import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Container, Divider, Typography } from "@mui/material";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    const DashboardMenu = [
        {
            Title: "Order History",
            Button: "See all",
            Link: "/admin/order-history",
        },
        {
            Title: "Products",
            Button: "See all & edit",
            Link: "/admin/products",
        },
        {
            Title: "About",
            Button: "Edit",
            Link: "#",
        },
        {
            Title: "All Users",
            Button: "See all",
            Link: "#",
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
                        minHeight: 300,
                    }}
                >
                    <Typography fontSize={22} gutterBottom>
                        Stock list
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: "#e3e3e3",
                            p: 2,
                            borderRadius: 3,
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography fontWeight={600}>
                            Nursing Manikin
                        </Typography>
                        <Typography>8 pc</Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#e3e3e3",
                            p: 2,
                            borderRadius: 3,
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography fontWeight={600}>Microscope</Typography>
                        <Typography>2 pc</Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#e3e3e3",
                            p: 2,
                            borderRadius: 3,
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography fontWeight={600}>3' Skeleton</Typography>
                        <Typography>2 pc</Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: "#e3e3e3",
                            p: 2,
                            borderRadius: 3,
                            my: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography fontWeight={600}>Injection Arm</Typography>
                        <Typography>2 pc</Typography>
                    </Box>
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
                            <InertiaLink href={Menu.Link}>
                                {Menu.Button}
                            </InertiaLink>
                        </Box>
                        <Divider />
                    </Box>
                ))}
            </Container>
        </AdminLayout>
    );
}
