import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Box, IconButton } from "@mui/material";

export default function BackButton() {
    return (
        <Box display="inline-block" mr={2}>
            <IconButton>
                <ArrowCircleLeftOutlinedIcon />
            </IconButton>
        </Box>
    );
}
