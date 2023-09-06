import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext } from "react";
import { CartItemContext } from "@/context/CartItemContext";

export default function CartQtyToggle() {
    // const { cart, setIncrease, setDecrease } = useContext(CartItemContext);
    const { cart, setIncrease, setDecrease } = useContext(CartItemContext);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ededed",
                    borderRadius: 3,
                }}
            >
                <RemoveIcon fontSize="small" onClick={setDecrease} />
                <Typography bgcolor="#dedede" p={1} sx={{ fontSize: 10 }}>
                    {cart.qty}
                </Typography>

                <AddIcon fontSize="small" onClick={setIncrease} />
            </Box>
        </Box>
    );
}
