import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function CartItemCard() {
    return (
        <Box
            sx={{
                p: 1,
                borderRadius: 2,
                my: 2,
                borderRadius: 5,
                border: "1px solid #dedede",
            }}
        >
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                    <Box
                        sx={{
                            width: 100,
                            height: 73,
                            backgroundColor: "#efefef",
                            borderRadius: 5,
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontSize={14} fontWeight={400}>
                        Nursing manikin with exchangable genital parts
                    </Typography>

                    <Grid container></Grid>

                    <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                        1,650,000 Ks
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton>
                        <DeleteRoundedIcon fontSize="small" />
                    </IconButton>

                    <Typography
                        sx={{
                            fontSize: { xs: 12, sm: 13, md: 15 },
                        }}
                    >
                        Qty: 2
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
