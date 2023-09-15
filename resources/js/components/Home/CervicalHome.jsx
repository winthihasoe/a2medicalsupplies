import React from "react";
import { Box, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function CervicalHome() {
    return (
        <Box
            sx={{
                width: "100%",
                height: 109,
                flexShrink: 0,
                border: "1px solid #d2d2d2",
                borderRadius: 5,
                backgroundColor: "#f6eded",
                overflow: "hidden",
                display: "flex",
                cursor: "pointer",
            }}
            onClick={() => router.get(route("cervical"))}
        >
            <Box
                sx={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography fontSize={16} fontWeight={600} p={1} align="center">
                    Cervical vertebra Model
                </Typography>
            </Box>
            <Box>
                <img
                    src="/images/products/cervical.jpg"
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
