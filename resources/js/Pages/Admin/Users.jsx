import AdminLayout from "@/layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Users({ users }) {
    return (
        <AdminLayout heading={"All Users"}>
            <Head title="All Users" />
            <Container maxWidth="xs">
                {users.map((user) => (
                    <Box
                        key={user.id}
                        sx={{
                            bgcolor: "#feefee",
                            p: 2,
                            borderRadius: 3,
                            mb: 2,
                        }}
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            mb={1}
                        >
                            <Box>
                                <Link href={route("showUser", user.id)}>
                                    <Typography fontSize={14} fontWeight={600}>
                                        {user.name}
                                    </Typography>
                                </Link>
                                <Typography fontSize={12} fontWeight={600}>
                                    {user.is_admin == 1 && "Admin"}
                                    {user.is_editor == 1 && "Editor"}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography fontSize={14}>
                                    {user.email}
                                </Typography>

                                <Typography align="right" fontSize={14}>
                                    {user.phone}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Container>
        </AdminLayout>
    );
}
