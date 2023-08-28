import React from "react";
import { Box, Container, TextField, Typography, Button } from "@mui/material";
import { InertiaLink, useRemember, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Register() {
    const [data, setData] = useRemember({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm_password: "",
    });

    const { post, processing } = useForm({
        ...data,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", data);
    };
    console.log(data);
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
                    Register
                </Typography>
                <Box>
                    <Typography>Username:</Typography>
                    <TextField
                        onChange={handleChange}
                        name="username"
                        size="small"
                        type="text"
                        fullWidth
                        value={data.username}
                    />
                </Box>
                <Box>
                    <Typography>Email:</Typography>
                    <TextField
                        onChange={handleChange}
                        name="email"
                        type="email"
                        size="small"
                        fullWidth
                        value={data.email}
                    />
                </Box>
                <Box>
                    <Typography>Phone:</Typography>
                    <TextField
                        onChange={handleChange}
                        name="phone"
                        type="number"
                        size="small"
                        fullWidth
                        value={data.phone}
                    />
                </Box>
                <Typography>Passowrd:</Typography>
                <TextField
                    onChange={handleChange}
                    name="password"
                    type="password"
                    size="small"
                    fullWidth
                    value={data.password}
                />
                <Box>
                    <Typography>Confirm Passowrd:</Typography>
                    <TextField
                        onChange={handleChange}
                        name="confirm_password"
                        type="password"
                        size="small"
                        fullWidth
                    />
                </Box>
                <Typography fontSize={14}>
                    Already have an account?{" "}
                    <InertiaLink href="/login">Login!</InertiaLink>
                </Typography>
                <Box px={6} mb={3}>
                    <Button
                        size="small"
                        fullWidth
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
