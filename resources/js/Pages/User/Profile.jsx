import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import {
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography,
} from "@mui/material";
import BackButton from "../../components/BackButton";
import { Head, useForm } from "@inertiajs/react";

export default function Profile(props) {
    const user = props.user;
    const { data, setData, post, errors, processing } = useForm({
        ...user,
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSave = (e) => {
        e.preventDefault();
        post(route("updateUser", user.id), data);
    };
    console.log(user);

    return (
        <AccountLayout>
            <Head title="Profile" />
            <Container>
                <Box mb={2}>
                    <Typography fontSize={20} fontWeight={700}>
                        <BackButton /> Profile
                    </Typography>
                </Box>
                <Divider />
                {/* <Box
                    sx={{
                        width: 200,
                        height: 200,
                        borderRadius: "50%",
                        backgroundColor: "#efefef",
                        margin: "20px auto",
                    }}
                ></Box>
                <Box align="center">
                    <Button>edit picture</Button>
                </Box> */}
                <form>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                            my: 5,
                        }}
                    >
                        <Box>
                            <Typography fontSize={12}>Name: *</Typography>
                            <TextField
                                size="small"
                                value={data.name}
                                onChange={handleChange}
                                name="name"
                                type="text"
                                required
                            />
                            {errors.name && (
                                <Typography fontSize={12}>
                                    {errors.name}
                                </Typography>
                            )}
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Email: *</Typography>
                            <TextField
                                size="small"
                                value={data.email}
                                onChange={handleChange}
                                name="email"
                                type="email"
                                required
                            />
                            {errors.email && (
                                <Typography fontSize={12}>
                                    {errors.email}
                                </Typography>
                            )}
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Phone: *</Typography>
                            <TextField
                                size="small"
                                value={data.phone}
                                onChange={handleChange}
                                name="phone"
                                type="number"
                                required
                            />
                            {errors.phone && (
                                <Typography fontSize={12}>
                                    {errors.phone}
                                </Typography>
                            )}
                        </Box>
                        <Box>
                            <Typography fontSize={12}>
                                Current Password:
                            </Typography>
                            <TextField
                                size="small"
                                name="current_password"
                                type="password"
                                value={data.current_password}
                                onChange={handleChange}
                            />
                            {errors.current_password && (
                                <Typography fontSize={12}>
                                    {errors.current_password}
                                </Typography>
                            )}
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Password:</Typography>
                            <TextField
                                size="small"
                                name="password"
                                type="password"
                                value={data.password}
                                onChange={handleChange}
                            />
                            {errors.current_password && (
                                <Typography fontSize={12}>
                                    {errors.password}
                                </Typography>
                            )}
                        </Box>
                        <Box>
                            <Typography fontSize={12}>
                                Confirm Password:
                            </Typography>
                            <TextField
                                size="small"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={handleChange}
                            />
                            {errors.current_password && (
                                <Typography fontSize={12}>
                                    {errors.password_confirmation}
                                </Typography>
                            )}
                        </Box>
                        <Box width="100%" align="center">
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleSave}
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Container>
        </AccountLayout>
    );
}
