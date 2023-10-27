import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function ManikinHome() {
    return (
        <Box
            sx={{
                width: 150,
                height: 220,
                flexShrink: 0,
                border: "1px solid #d2d2d2",
                borderRadius: 5,
                backgroundColor: "#f6eded",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={() => router.get(route("manikins"))}
        >
            <Box
                sx={{
                    height: "30%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography fontSize={16} fontWeight={700} align="center">
                    Nursing Manikin
                </Typography>
            </Box>
            <Box
                sx={{
                    overflow: "hidden",
                }}
            >
                <img
                    src="/images/products/nursing_manikins.jpg"
                    alt=""
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
        </Box>
    );
}
