import AdminLayout from "@/layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Users({ users }) {
    return (
        <AdminLayout heading={"All Users"}>
            <Head title="All Users" />
            <Container maxWidth="xs">
                {users.map((user) => (
                    <Box
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
                            <Typography fontSize={14} fontWeight={600}>
                                {user.name}
                            </Typography>
                            <Typography fontSize={14}>{user.email}</Typography>
                        </Box>
                        <Typography align="right" fontSize={14}>
                            {user.phone}
                        </Typography>
                    </Box>
                ))}
            </Container>
        </AdminLayout>
    );
}
