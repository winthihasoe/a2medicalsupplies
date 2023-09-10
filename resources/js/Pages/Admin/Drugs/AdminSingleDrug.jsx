import NumberWithComma from "@/components/NumberWithComma";
import AdminLayout from "@/layouts/AdminLayout";
import { Head, router } from "@inertiajs/react";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function AdminSingleDrug({ drug }) {
    return (
        <AdminLayout heading={drug.drug_name}>
            <Head title={drug.drug_name} />
            <Container maxWidth="xs">
                <Typography
                    fontSize={18}
                    fontWeight={600}
                    align="center"
                    my={2}
                >
                    Drug Detail
                </Typography>

                {/* Drug detail section  */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {/* Drug Name  */}
                    <Box
                        sx={{
                            bgcolor: "#efefef",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Typography fontSize={14} fontWeight={600}>
                            Drug Name
                        </Typography>
                        <Typography fontSize={14} fontWeight={600}>
                            {drug.drug_name}
                        </Typography>
                    </Box>

                    {/* Retail Price  */}
                    <Box
                        sx={{
                            bgcolor: "#ba7636",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Typography
                            color="white"
                            fontSize={16}
                            fontWeight={600}
                        >
                            Retail Price
                        </Typography>
                        <Typography
                            color="white"
                            fontSize={16}
                            fontWeight={600}
                        >
                            <NumberWithComma
                                value={Math.floor(drug.retail_price)}
                            />{" "}
                            Ks
                        </Typography>
                    </Box>

                    {/* Dr Price  */}
                    <Box
                        sx={{
                            bgcolor: "#efefef",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Typography fontSize={14} fontWeight={600}>
                            Doctor Price
                        </Typography>
                        <Typography fontSize={14} fontWeight={600}>
                            {drug.dr_price} Ks
                        </Typography>
                    </Box>

                    {/* Purchase price  */}
                    <Box
                        sx={{
                            bgcolor: "#ffefff",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Typography fontSize={14} fontWeight={600}>
                            Purchase Price
                        </Typography>
                        <Typography fontSize={14} fontWeight={600}>
                            {drug.buying_price}
                        </Typography>
                    </Box>

                    {/* Supplier  */}
                    <Box
                        sx={{
                            bgcolor: "#efefef",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Typography fontSize={14} fontWeight={600}>
                            Supplier
                        </Typography>
                        <Typography fontSize={14} fontWeight={600}>
                            {drug.supplier}
                        </Typography>
                    </Box>

                    {/* Purchased date  */}
                    <Box
                        sx={{
                            bgcolor: "#efefef",
                            borderRadius: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 2,
                        }}
                    >
                        <Typography fontSize={14} fontWeight={600}>
                            Purchase at
                        </Typography>
                        <Typography fontSize={14} fontWeight={600}>
                            {drug.purchase_date}
                        </Typography>
                    </Box>
                </Box>

                {/* Button section  */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        my: 3,
                        px: 3,
                        gap: 3,
                    }}
                >
                    <Button
                        onClick={() => router.get(route("editDrug", drug.id))}
                        fullWidth
                        size="small"
                        variant="contained"
                    >
                        Edit
                    </Button>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => router.get(route("allDrugs"))}
                    >
                        Cancel
                    </Button>
                </Box>
            </Container>
        </AdminLayout>
    );
}
