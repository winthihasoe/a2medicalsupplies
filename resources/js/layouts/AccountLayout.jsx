import { Box, Container } from "@mui/material";
import React from "react";
import AppBar from "../components/AppBar";

export default function AccountLayout({ children }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <AppBar />
            <Box component="main" maxWidth="xs">
                {children}
            </Box>
        </Box>
    );
}
