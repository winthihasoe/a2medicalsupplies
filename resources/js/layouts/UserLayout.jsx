import { Box, Container } from "@mui/material";
import React from "react";
import AppBar from "../components/AppBar";
import SearchBar from "../components/SearchBar";

export default function UserLayout({ children }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <AppBar />
            <Container component="main" maxWidth="xs">
                <SearchBar />
                {children}
            </Container>
        </Box>
    );
}
