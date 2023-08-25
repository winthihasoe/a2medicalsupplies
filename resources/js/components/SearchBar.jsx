import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function SearchBar() {
    return (
        <Box my={2}>
            <TextField
                fullWidth
                placeholder="Search ..."
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}
