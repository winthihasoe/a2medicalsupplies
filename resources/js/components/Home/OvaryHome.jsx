import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function OvaryHome() {
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
            onClick={() => router.get(route("ovary"))}
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
                <Typography fontSize={13} fontWeight={600} align="center">
                    Uterus Ovary model
                </Typography>
            </Box>
            <Box>
                <img
                    src="/images/products/ovary.jpg"
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
