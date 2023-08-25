import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
    return (
        <Box
            sx={{
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "flex-end",
                }}
            >
                <Typography fontWeight={500} fontSize={12}>
                    Copyright@2023
                </Typography>
                <Typography color="primary" fontWeight={700} fontSize={15}>
                    A2 Medical supply
                </Typography>
            </Box>
        </Box>
    );
}
