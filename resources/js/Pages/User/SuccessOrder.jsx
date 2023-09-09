import React from "react";
import UserLayout from "../../layouts/UserLayout";
import { Box, Button, Typography } from "@mui/material";
import { Head, router } from "@inertiajs/react";

export default function SuccessOrder() {
    return (
        <UserLayout>
            <Head title="Order successful" />
            <Box mt={4} align="center" p={5}>
                <Typography fontSize={25} fontWeight={500} mb={4}>
                    Your order is placed successfully.
                </Typography>
                <Box mb={1}>
                    <Button
                        onClick={() => router.get(route("home"))}
                        variant="contained"
                        size="small"
                        fullWidth
                    >
                        Go to Home
                    </Button>
                </Box>
                <Typography fontSize={10}>
                    Thank you for shopping with us!
                </Typography>
            </Box>
        </UserLayout>
    );
}
