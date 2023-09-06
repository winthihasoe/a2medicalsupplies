import React from "react";
import {
    Box,
    Button,
    Container,
    Divider,
    TextField,
    Typography,
} from "@mui/material";

export default function NewAddressForm({
    data,
    handleChange,
    handleSubmit,
    processing,
    errors,
}) {
    console.log(data);
    return (
        <Box sx={{ my: 2, p: 2, border: "3px dashed blue", borderRadius: 4 }}>
            <Typography fontSize={18} mb={1}>
                Deliver to:
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: "column",
                    px: 2,
                }}
            >
                <Box>
                    <TextField
                        value={data.address}
                        size="small"
                        fullWidth
                        type="text"
                        multiline
                        required
                        onChange={handleChange}
                        name="address"
                        label={
                            <Typography fontSize={11} display="inline-block">
                                Address
                            </Typography>
                        }
                    />
                    {errors.address && (
                        <Typography ml={2} fontSize={12}>
                            {errors.address}
                        </Typography>
                    )}
                </Box>

                <Box>
                    <TextField
                        value={data.city}
                        size="small"
                        fullWidth
                        type="text"
                        multiline
                        required
                        onChange={handleChange}
                        name="city"
                        label={
                            <Typography fontSize={11} display="inline-block">
                                City
                            </Typography>
                        }
                    />
                    {errors.city && (
                        <Typography ml={2} fontSize={12}>
                            {errors.city}
                        </Typography>
                    )}
                </Box>
                <Box>
                    <TextField
                        value={data.phone}
                        size="small"
                        fullWidth
                        required
                        onChange={handleChange}
                        name="phone"
                        type="number"
                        label={
                            <Typography fontSize={11} display="inline-block">
                                Phone
                            </Typography>
                        }
                    />
                    {errors.phone && (
                        <Typography ml={2} fontSize={12}>
                            {errors.phone}
                        </Typography>
                    )}
                </Box>
            </Box>
            <Box mt={2} align="center">
                <Button
                    variant="contained"
                    size="small"
                    onClick={handleSubmit}
                    disabled={processing}
                >
                    Save
                </Button>
            </Box>
        </Box>
    );
}
