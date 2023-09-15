import { router } from "@inertiajs/react";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function BloodCollectionNeedleHome() {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "ceneter",
                    alignItems: "center",
                    border: "1px solid #dedede",
                    borderRadius: 4,
                    height: 150,
                    width: "100%",
                    overflow: "hidden",
                    cursor: "pointer",
                }}
                onClick={() => router.get("needle")}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="50%"
                    p={2}
                >
                    <Typography fontSize={18} align="right" fontWeight={600}>
                        Blood Collection Needles
                    </Typography>
                </Box>
                <Box width="50%">
                    <img
                        src="/images/products/bloodCollectionNeedle.jpg"
                        alt=""
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
