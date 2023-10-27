import NumberWithComma from "@/components/NumberWithComma";
import AdminLayout from "@/layouts/AdminLayout";
import { Head, router } from "@inertiajs/react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function AdminDrugIndex({ drugs }) {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <AdminLayout heading={"All Drugs"}>
            <Head title="Drugs" />
            <Box align="right" mx={3}>
                <Button
                    onClick={() => router.get(route("addDrug"))}
                    variant="outlined"
                >
                    Add Drug
                </Button>
            </Box>
            {/* Search drug input field  */}
            <Box
                sx={{
                    position: "sticky",
                    top: 0,
                    bgcolor: "white",
                    px: 2,
                    pt: 2,
                    pb: 1,
                }}
            >
                <TextField
                    onChange={(e) => setSearchTerm(e.target.value)}
                    size="small"
                    label={
                        <Typography fontSize={13}>Search drugs ...</Typography>
                    }
                    fullWidth
                />
                <Box
                    sx={{
                        display: "flex",
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        justifyContent: "space-between",
                    }}
                >
                    <Typography fontSize={14}>Drug Name</Typography>
                    <Typography fontSize={14}>Retail Price</Typography>
                </Box>
            </Box>

            {/* Show all drug and search drugs  */}
            <Container maxWidth="xs">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1,
                        p: 1,
                        mb: 3,
                    }}
                >
                    {drugs
                        .filter((val) => {
                            if (searchTerm == "") {
                                return val;
                            } else if (
                                val.drug_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }
                        })
                        .map((drug) => (
                            <Box
                                key={drug.id}
                                sx={{
                                    display: "flex",
                                    bgcolor: "#efefef",
                                    p: 1,
                                    borderRadius: 2,
                                    cursor: "pointer",
                                }}
                                onClick={() =>
                                    router.get(
                                        route("adminSingleDrug", drug.id)
                                    )
                                }
                            >
                                <Box sx={{ width: "70%" }}>
                                    <Typography fontSize={14}>
                                        {drug.drug_name}
                                    </Typography>
                                </Box>
                                <Box sx={{ width: "30%" }} align="right">
                                    <Typography fontSize={14}>
                                        <NumberWithComma
                                            value={Math.floor(
                                                drug.retail_price
                                            )}
                                        />{" "}
                                        Ks
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                </Box>
            </Container>
        </AdminLayout>
    );
}
