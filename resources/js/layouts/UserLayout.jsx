import { Box, Container } from "@mui/material";
import React from "react";
import AppBar from "../components/AppBar";
import SearchBar from "../components/SearchBar";
import FlashMessage from "@/components/FlashMessage";

export default function UserLayout({ children }) {
    return (
        <main>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                }}
            >
                <FlashMessage />
                <AppBar />
                <Container component="main" maxWidth="xs">
                    <SearchBar />
                    {children}
                </Container>
            </Box>
        </main>
    );
}
