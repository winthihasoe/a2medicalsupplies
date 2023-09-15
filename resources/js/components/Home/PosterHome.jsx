import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function PosterHome() {
    return (
        <Box>
            <Typography fontSize={15} gutterBottom>
                -- Medical Posters --
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "ceneter",
                    alignItems: "center",
                    border: "1px solid #000000",
                    borderRadius: 3,
                    height: 200,
                    overflow: "hidden",
                    cursor: "pointer",
                }}
                onClick={() => router.get("posters")}
            >
                <img src="/images/products/poster1.jpg" alt="" height="100%" />
                <img src="/images/products/poster2.jpg" alt="" height="100%" />
                <img src="/images/products/poster3.jpg" alt="" height="100%" />
            </Box>
        </Box>
    );
}
