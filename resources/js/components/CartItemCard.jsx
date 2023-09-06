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
import CartQtyToggle from "./CartQtyToggle";
import { CartItemContext } from "@/context/CartItemContext";

export default function CartItemCard(props) {
    const cart = props.cart;
    let qty = cart.qty;

    const handleDeleteCart = (e) => {
        e.preventDefault();
        router.delete(route("deleteCart", cart.id));
    };

    const setIncrease = (e) => {
        if (cart.qty < cart.product.stock) {
            qty += 1;
            handleSubmitQty(e);
        }
    };

    const setDecrease = (e) => {
        if (cart.qty > 1) {
            qty -= 1;
            handleSubmitQty(e);
        }
    };

    const handleSubmitQty = (e) => {
        e.preventDefault();
        router.put(route("changeCartQty", cart.id), { qty });
    };

    return (
        <CartItemContext.Provider value={{ cart, setIncrease, setDecrease }}>
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
                                borderRadius: 4,
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={`/storage/images/products/${cart.product.images[0]}`}
                                width="100%"
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography fontSize={14} fontWeight={400}>
                            {cart.product.product_name}
                        </Typography>

                        <Typography sx={{ fontWeight: 900, fontSize: 16 }}>
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
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <IconButton onClick={handleDeleteCart}>
                                <DeleteRoundedIcon fontSize="small" />
                            </IconButton>

                            <CartQtyToggle />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </CartItemContext.Provider>
    );
}
