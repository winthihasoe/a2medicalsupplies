import React from "react";
import UserLayout from "../layouts/UserLayout";
import { Box, Button, Divider, Typography } from "@mui/material";

export default function ProductDetail({ descriptions }) {
    return (
        <UserLayout>
            <Box
                sx={{
                    width: 350,
                    height: 190,
                    borderRadius: 5,
                    backgroundColor: "#efefef",
                }}
            ></Box>
            <Typography my={2} fontSize={22} fontWeight={700}>
                Nursing Manikin
            </Typography>
            <Typography my={2} fontSize={25} fontWeight={700}>
                1,650,000 Ks
            </Typography>
            <Divider />
            <Typography my={2} fontSize={25} fontWeight={600}>
                Description
            </Typography>
            {descriptions.map((item) => (
                <Typography
                    px={2}
                    fontSize={13}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                />
            ))}

            {/* Button area  */}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 3,
                    p: 3,
                }}
            >
                <Button variant="contained" color="primary">
                    Order Now
                </Button>
                <Button variant="contained" color="secondary">
                    Quotation
                </Button>
            </Box>
        </UserLayout>
    );
}
