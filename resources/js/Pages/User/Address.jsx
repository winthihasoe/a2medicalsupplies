import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import {
    Box,
    Button,
    Container,
    Divider,
    Fab,
    TextField,
    Typography,
} from "@mui/material";
import BackButton from "../../components/BackButton";
import { Head, useForm } from "@inertiajs/react";
import NewAddressForm from "@/components/User/NewAddressForm";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function Address(props) {
    const addresses = props.addresses;
    const { data, setData, post, processing, errors, reset } = useForm({
        address: "",
        city: "",
        phone: "",
    });

    const [isAdding, setIsAdding] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("storeAddress"), {
            onSuccess: () => {
                setData({
                    address: "",
                    city: "",
                    phone: "",
                });
            },
            data,
        });
    };
    return (
        <AccountLayout>
            <Head title="Address" />
            <Container maxWidth="xs">
                <Box
                    mb={2}
                    display="flex"
                    justifyContent="space-between"
                    px={2}
                >
                    <Typography fontSize={20} fontWeight={700}>
                        <BackButton /> My Address
                    </Typography>
                    <Fab
                        color="primary"
                        aria-label="add"
                        size="small"
                        onClick={() => setIsAdding(!isAdding)}
                    >
                        <AddIcon />
                    </Fab>
                </Box>

                {/* Add new address section  */}
                {isAdding && (
                    <Box width="90%" margin="20px auto">
                        <NewAddressForm
                            data={data}
                            setData={setData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            processing={processing}
                            errors={errors}
                        />
                    </Box>
                )}

                {/* My previous address section  */}
                <Box
                    sx={{
                        width: "90%",
                        margin: "30px auto",
                        p: 2,
                        border: "2px solid #dedede",
                    }}
                >
                    <Typography fontSize={18} mb={2}>
                        <u>My previous address</u>
                    </Typography>
                    <ul>
                        {addresses.map((address) => (
                            <li>
                                <Typography my={1}>
                                    {address.address +
                                        ", " +
                                        address.city +
                                        ", " +
                                        address.phone}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                </Box>
            </Container>
        </AccountLayout>
    );
}
