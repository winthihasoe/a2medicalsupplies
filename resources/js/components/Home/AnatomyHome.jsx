import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function AnatomyHome() {
    return (
        <Box
            sx={{
                width: "100%",
                height: 239,
                flexShrink: 0,
                border: "1px solid #d2d2d2",
                borderRadius: 5,
                backgroundColor: "#f6eded",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                cursor: "pointer",
            }}
            onClick={() => router.get(route("anatomy"))}
        >
            <Box
                sx={{
                    height: "20%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography fontSize={16} fontWeight={700} align="center">
                    Anatomy Torso
                </Typography>
            </Box>
            <Box
                sx={{
                    overflow: "hidden",
                }}
            >
                <img
                    src="/images/products/anatomy.jpg"
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
