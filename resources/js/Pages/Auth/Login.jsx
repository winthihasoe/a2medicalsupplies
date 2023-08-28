import React from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { InertiaLink } from "@inertiajs/inertia-react";

export default function Login() {
    return (
        <Container>
            <Box align="center" my={3}>
                <img src="/images/logo.jpg" width={80} />
            </Box>
            <Box
                sx={{
                    width: 280,
                    margin: "2px auto",
                    border: "2px solid #cdcdcd",
                    borderRadius: 5,
                    py: 2,
                    px: 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                <Typography
                    align="center"
                    mb={2}
                    fontSize={22}
                    fontWeight={400}
                >
                    Login
                </Typography>
                <Box>
                    <Typography>Email:</Typography>
                    <TextField size="small" fullWidth />
                </Box>
                <Box>
                    <Typography>Passowrd:</Typography>
                    <TextField size="small" fullWidth />
                </Box>
                <Typography fontSize={14}>
                    Don't have an account?{" "}
                    <InertiaLink href="/register">Create one</InertiaLink>
                </Typography>
                <Box px={6} mb={3}>
                    <Button size="small" fullWidth variant="contained">
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
