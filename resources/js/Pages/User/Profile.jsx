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
import { Head } from "@inertiajs/inertia-react";

export default function Profile() {
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
                <Box
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
                </Box>
                <form>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 2,
                            mb: 5,
                        }}
                    >
                        <Box>
                            <Typography fontSize={12}>Name:</Typography>
                            <TextField size="small" />
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Email:</Typography>
                            <TextField size="small" />
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Phone:</Typography>
                            <TextField size="small" />
                        </Box>
                        <Box>
                            <Typography fontSize={12}>Password:</Typography>
                            <TextField size="small" />
                        </Box>
                        <Box>
                            <Button variant="contained" size="small">
                                Save
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Container>
        </AccountLayout>
    );
}
