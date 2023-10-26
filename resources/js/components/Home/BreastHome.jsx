import React from "react";
import { Box, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function BreastHome() {
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
            onClick={() => router.get(route("breast"))}
        >
            <Box
                sx={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography fontSize={13} fontWeight={600} p={1} align="center">
                    Breast Model
                </Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
                <img
                    src="/images/products/breast.jpg"
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
