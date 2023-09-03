import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Divider,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import NumberWithComma from "./NumberWithComma";
import { router } from "@inertiajs/react";

export default function CartItemCard(props) {
    const cart = props.cart;

    const handleDeleteCart = (e) => {
        e.preventDefault();
        router.delete(route("deleteCart", cart.id));
    };
    console.log(cart);
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
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={`/storage/images/products/${cart.product.images[0]}`}
                            width="100%"
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography fontSize={14} fontWeight={400}>
                        {cart.product.product_name}
                    </Typography>

                    <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                        <NumberWithComma value={cart.product.price} /> Ks
                    </Typography>

                    {cart.product.stock == 0 && (
                        <Chip
                            label="Preorder only"
                            size="small"
                            variant="outlined"
                        />
                    )}
                </Grid>
                <Grid item xs={2}>
                    <IconButton onClick={handleDeleteCart}>
                        <DeleteRoundedIcon fontSize="small" />
                    </IconButton>

                    <Typography
                        sx={{
                            fontSize: { xs: 12, sm: 13, md: 15 },
                        }}
                    >
                        Qty: {cart.qty}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
