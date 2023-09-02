import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import BackButton from "../../components/BackButton";
import { Head } from "@inertiajs/react";

export default function Address() {
    return (
        <AccountLayout>
            <Head title="Address" />
            <Box mb={2}>
                <Typography fontSize={20} fontWeight={700}>
                    <BackButton /> My Address
                </Typography>
            </Box>

            {/* Add new address section  */}
            <Box sx={{ my: 2, p: 2, border: "2px dashed #ba7636" }}>
                <Typography fontSize={18}>Deliver to:</Typography>
                <TextField
                    size="small"
                    fullWidth
                    placeholder="enter address & phone"
                />
                <Box mt={2} align="center">
                    <Button variant="contained" color="secondary" size="smal">
                        Save
                    </Button>
                </Box>
            </Box>

            {/* My previous address section  */}
            <Box sx={{ my: 2, p: 2, border: "2px solid #dedede" }}>
                <Typography fontSize={18} mb={2}>
                    My previous address
                </Typography>
                <ul>
                    <li>
                        <Typography my={1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam
                        </Typography>
                    </li>
                    <Divider />
                    <li>
                        <Typography my={1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsa, nulla?
                        </Typography>
                    </li>
                </ul>
            </Box>
        </AccountLayout>
    );
}
