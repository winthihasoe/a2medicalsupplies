import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function ChildDummyHome() {
    return (
        <Box sx={{ cursor: "pointer" }} onClick={() => router.get("aesthetic")}>
            <Box
                sx={{
                    width: 132,
                    height: 132,
                    borderRadius: "50%",
                    backgroundColor: "#f6eded",
                    mb: 1,
                    overflow: "hidden",
                }}
            >
                <img src="/images/products/child.jpg" height="100%" />
            </Box>
            <Typography variant="subtitle1" align="center">
                Child Dummy
            </Typography>
        </Box>
    );
}
