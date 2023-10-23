import BackButton from "@/Components/BackButton";
import UserLayout from "@/Layouts/UserLayout";
import { Box, Chip, Container, Divider, Typography } from "@mui/material";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function SearchResult({ results, keywords }) {
    return (
        <UserLayout>
            <Head title={keywords + " results"} />
            <Container maxWidth="sm">
                <Typography fontSize={12} gutterBottom>
                    <BackButton /> Search result for:{" "}
                    <strong>{keywords}</strong>
                </Typography>

                {/* If no search result, Show this  */}
                {results.length == 0 && (
                    <Box align="center" my={2}>
                        <Typography variant="h6">No result found!</Typography>
                    </Box>
                )}

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 3,
                        justifyContent: "center",
                        mt: 2,
                        mb: 4,
                    }}
                >
                    {results.map((item) => (
                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 3,
                            }}
                        >
                            {/* Showing res and menu in a Restaurant card  */}
                            {item.product_name ? (
                                <Link
                                    className="inertia-link"
                                    href={route("singleProduct", item.id)}
                                >
                                    <Box
                                        sx={{
                                            p: 2,
                                            border: "1px solid #ccc",
                                            borderRadius: 3,
                                            width: 100,
                                            bgcolor: "#eee",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography
                                                fontSize={12}
                                                gutterBottom
                                            >
                                                <strong>
                                                    {item.product_name}
                                                </strong>
                                            </Typography>
                                            <MedicalInformationRoundedIcon
                                                sx={{ width: 20 }}
                                            />
                                        </Box>

                                        <Divider variant="inset" />

                                        <Box
                                            sx={{
                                                borderRadius: 2,
                                                overflow: "hidden",
                                                my: 2,
                                            }}
                                        >
                                            <img
                                                src={`/storage/images/products/${item.images[0]}`}
                                                width="100%"
                                            />
                                        </Box>
                                        {/* {item.drug_name && (
                                            <Typography
                                                my={1}
                                                fontSize={10}
                                                align="right"
                                            >
                                                {item.drug_name}
                                            </Typography>
                                        )} */}
                                    </Box>
                                </Link>
                            ) : (
                                ""
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </UserLayout>
    );
}
