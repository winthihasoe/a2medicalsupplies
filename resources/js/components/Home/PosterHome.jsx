import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function PosterHome() {
    return (
        <Box>
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
            <Typography fontSize={15} mt={2} gutterBottom align="center">
                -- Medical Posters --
            </Typography>
        </Box>
    );
}
