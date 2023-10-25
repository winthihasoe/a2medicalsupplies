import BackButton from "@/Components/BackButton";
import UserLayout from "@/Layouts/UserLayout";
import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Typography,
} from "@mui/material";
import MedicalInformationRoundedIcon from "@mui/icons-material/MedicalInformationRounded";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import React from "react";
import { Head, Link, router } from "@inertiajs/react";

export default function SearchResult({ results, keywords }) {
    console.log(results);
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
                            {/* Showing product and categories from search result */}
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
                                            width: 300,
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
                                    </Box>
                                </Link>
                            ) : (
                                <Box>
                                    <Box
                                        sx={{
                                            width: 300,
                                            p: 2,
                                            bgcolor: "#eee",
                                            border: "1px solid #ccc",
                                            borderRadius: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mb: 2,
                                            }}
                                        >
                                            <Typography
                                                fontSize={13}
                                                fontWeight={600}
                                            >
                                                {item.category_name}
                                            </Typography>
                                            <LocalOfferIcon
                                                sx={{ width: 40 }}
                                            />
                                        </Box>
                                        <Divider />
                                        <Box mt={2}>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                onClick={() =>
                                                    router.visit(
                                                        route(
                                                            "productList",
                                                            item.category_name
                                                        )
                                                    )
                                                }
                                            >
                                                See more ...
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </UserLayout>
    );
}
