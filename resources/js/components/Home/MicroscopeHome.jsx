import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function MicroscopeHome() {
    return (
        <Box
            sx={{
                width: 290,
                height: 150,
                flexShrink: 0,
                display: "flex",
                justifyContent: "space-between",
                borderRadius: 5,
                background:
                    "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
                overflow: "hidden",
                cursor: "pointer",
                margin: "0 auto",
            }}
            onClick={() => router.get(route("microscope"))}
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="70%"
                p={2}
            >
                <Typography fontSize={18} fontWeight={600}>
                    Microscope
                </Typography>
            </Box>
            <Box
                sx={{
                    overflow: "hidden",
                }}
            >
                <img
                    src="/images/products/microscope.jpg"
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
