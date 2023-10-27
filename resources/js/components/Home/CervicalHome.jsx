import React from "react";
import { Box, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function CervicalHome() {
    return (
        <Box
            sx={{
                width: "100%",
                height: 110,
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
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 1,
                }}
            >
                <Typography fontSize={12} fontWeight={600} p={1} align="center">
                    Cervical vertebra Model
                </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
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
