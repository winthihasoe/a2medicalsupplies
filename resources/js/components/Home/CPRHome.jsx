import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function CPRHome() {
    return (
        <Box
            sx={{
                width: 150,
                height: 100,
                flexShrink: 0,
                border: "1px solid #d2d2d2",
                borderRadius: 5,
                backgroundColor: "#f6eded",
                overflow: "hidden",
                display: "flex",
                cursor: "pointer",
            }}
            onClick={() => router.get(route("cpr"))}
        >
            <Box
                sx={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                }}
            >
                <Typography fontSize={16} fontWeight={600}>
                    CPR
                </Typography>
            </Box>
            <Box>
                <img
                    src="/images/products/CPR.jpg"
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
