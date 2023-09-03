import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { router } from "@inertiajs/react";

export default function SkeletonHome() {
    return (
        <Box
            sx={{
                width: 174,
                height: 109,
                flexShrink: 0,
                border: "1px solid #d2d2d2",
                borderRadius: 5,
                backgroundColor: "#f6eded",
                overflow: "hidden",
                display: "flex",
            }}
            onClick={() => router.get(route("skeleton"))}
        >
            <Box
                sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography fontSize={16} fontWeight={600}>
                    Skeleton
                </Typography>
            </Box>
            <Box>
                <img
                    src="/images/products/skeleton.jpg"
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
