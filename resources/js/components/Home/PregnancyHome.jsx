import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function PregnancyHome() {
    return (
        <Box sx={{ cursor: "pointer" }} onClick={() => router.get("pregnancy")}>
            <Box
                sx={{
                    width: { xs: 90, sm: 100, md: 120 },
                    height: { xs: 90, sm: 100, md: 120 },
                    borderRadius: "50%",
                    backgroundColor: "#f6eded",
                    border: "2px solid orange",
                    mb: 1,
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src="/images/products/pregnancy.jpg" height="100%" />
            </Box>
            <Typography fontSize={12} align="center">
                Pregnancy Model
            </Typography>
        </Box>
    );
}
