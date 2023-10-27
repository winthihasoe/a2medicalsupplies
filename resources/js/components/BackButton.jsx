import React from "react";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Box, IconButton } from "@mui/material";

export default function BackButton() {
    const handleGoBack = () => {
        // Go back to the previous page in the browser history
        window.history.back();
    };
    return (
        <Box display="inline-block" mr={2} zIndex={1000}>
            <IconButton onClick={handleGoBack}>
                <ArrowCircleLeftOutlinedIcon />
            </IconButton>
        </Box>
    );
}
