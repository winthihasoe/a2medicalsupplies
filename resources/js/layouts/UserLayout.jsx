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
                <Container component="main">
                    <Box
                        sx={{
                            display: { xs: "block", sm: "block", md: "none" },
                        }}
                    >
                        <SearchBar />
                    </Box>
                    {children}
                </Container>
            </Box>
        </main>
    );
}
