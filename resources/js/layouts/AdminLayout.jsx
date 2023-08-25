import { Box, Container } from "@mui/material";
import React from "react";
import AdminBar from "../components/Admin/AdminBar";

export default function AdminLayout({ children, heading }) {
    return (
        <Box>
            <AdminBar heading={heading} />
            <Container component="main" maxWidth="xs">
                {children}
            </Container>
        </Box>
    );
}
