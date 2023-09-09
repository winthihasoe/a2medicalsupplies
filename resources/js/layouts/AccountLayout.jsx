import { Box, Container } from "@mui/material";
import React from "react";
import AppBar from "../components/AppBar";
import FlashMessage from "@/components/FlashMessage";

export default function AccountLayout({ children }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <FlashMessage />
            <AppBar />
            <Box component="main" maxWidth="xs">
                {children}
            </Box>
        </Box>
    );
}
