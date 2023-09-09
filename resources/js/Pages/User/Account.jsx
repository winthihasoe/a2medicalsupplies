import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import AccountLayout from "../../layouts/AccountLayout";
import { Head, Link } from "@inertiajs/react";

export default function Account() {
    const AccountMenus = [
        {
            Title: "Profile",
            Button: "edit",
            Link: "/profile",
        },
        {
            Title: "Cart",
            Button: "view",
            Link: "cart",
        },
        {
            Title: "My orders",
            Button: "view",
            Link: "my-orders",
        },
        {
            Title: "Address",
            Button: "edit",
            Link: "address",
        },
    ];
    return (
        <AccountLayout>
            <Head title="Account" />
            <Container maxWidth="xs">
                <Box sx={{ p: 2 }}>
                    {AccountMenus.map((Menu) => (
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
                                <Typography fontSize={22} fontWeight={700}>
                                    {Menu.Title}
                                </Typography>
                                <Link href={Menu.Link}>{Menu.Button}</Link>
                            </Box>
                            <Divider />
                        </Box>
                    ))}
                </Box>
            </Container>
        </AccountLayout>
    );
}
