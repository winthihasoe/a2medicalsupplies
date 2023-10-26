import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function ButtockHome() {
    return (
        <Box
            sx={{
                width: "100%",
                height: 150,
                flexShrink: 0,
                border: "1px solid #d2d2d2",
                borderRadius: 5,
                backgroundColor: "#f6eded",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
            }}
            onClick={() => router.get(route("buttock"))}
        >
            <Box sx={{ height: "70%" }}>
                <img
                    src="/images/products/buttock_injection.jpg"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography fontSize={13} fontWeight={600} align="center">
                    Buttock IM practice model
                </Typography>
            </Box>
        </Box>
    );
}
