import { InertiaLink } from "@inertiajs/inertia-react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import UserLayout from "../layouts/UserLayout";
import Footer from "../components/Footer";

export default function Home({ description }) {
    return (
        <UserLayout>
            <Box my={3}>
                <Grid container columnSpacing={1.5}>
                    <Grid item>
                        <Box
                            sx={{
                                width: 165,
                                height: 239,
                                flexShrink: 0,
                                border: "1px solid #d2d2d2",
                                borderRadius: 5,
                                backgroundColor: "#f6eded",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" rowSpacing={2}>
                            <Grid item>
                                <Box
                                    sx={{
                                        width: 174,
                                        height: 109,
                                        flexShrink: 0,
                                        border: "1px solid #d2d2d2",
                                        borderRadius: 5,
                                        backgroundColor: "#f6eded",
                                    }}
                                ></Box>
                            </Grid>
                            <Grid item>
                                <Box
                                    sx={{
                                        width: 174,
                                        height: 109,
                                        flexShrink: 0,
                                        border: "1px solid #d2d2d2",
                                        borderRadius: 5,
                                        backgroundColor: "#f6eded",
                                    }}
                                ></Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box my={3}>
                <Box
                    sx={{
                        width: 348,
                        height: 150,
                        flexShrink: 0,

                        borderRadius: 5,
                        background:
                            "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
                    }}
                ></Box>
            </Box>
            <Box
                my={3}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
            >
                <Box>
                    <Box
                        sx={{
                            width: 132,
                            height: 132,
                            borderRadius: "50%",
                            backgroundColor: "#f6eded",
                            mb: 1,
                        }}
                    ></Box>
                    <Typography variant="subtitle1" align="center">
                        Aesthetics
                    </Typography>
                </Box>
                <Box>
                    <Box
                        sx={{
                            width: 132,
                            height: 132,
                            borderRadius: "50%",
                            backgroundColor: "#f6eded",
                            mb: 1,
                        }}
                    ></Box>
                    <Typography variant="subtitle1" align="center">
                        Child Dummy
                    </Typography>
                </Box>
            </Box>
            <Box my={3}>
                <Box
                    sx={{
                        width: 348,
                        height: 150,
                        flexShrink: 0,

                        borderRadius: 5,
                        background:
                            "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
                    }}
                ></Box>
            </Box>
            <Box my={3}>
                <Box
                    sx={{
                        width: 348,
                        height: 150,
                        flexShrink: 0,

                        borderRadius: 5,
                        background:
                            "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
                    }}
                ></Box>
            </Box>
            <Grid container columnSpacing={1.5}>
                <Grid item>
                    <Box
                        sx={{
                            width: 165,
                            height: 239,
                            flexShrink: 0,
                            border: "1px solid #d2d2d2",
                            borderRadius: 5,
                            backgroundColor: "#f6eded",
                        }}
                    ></Box>
                </Grid>
                <Grid item>
                    <Grid container direction="column" rowSpacing={2}>
                        <Grid item>
                            <Box
                                sx={{
                                    width: 174,
                                    height: 109,
                                    flexShrink: 0,
                                    border: "1px solid #d2d2d2",
                                    borderRadius: 5,
                                    backgroundColor: "#f6eded",
                                }}
                            ></Box>
                        </Grid>
                        <Grid item>
                            <Box
                                sx={{
                                    width: 174,
                                    height: 109,
                                    flexShrink: 0,
                                    border: "1px solid #d2d2d2",
                                    borderRadius: 5,
                                    backgroundColor: "#f6eded",
                                }}
                            ></Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </UserLayout>
    );
}
