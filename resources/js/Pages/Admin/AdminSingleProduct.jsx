import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import ProductDescriptionEditor from "../../components/ProductDescriptionEditor";
export default function AdminSingleProduct() {
    return (
        <AdminLayout heading={"Single Product"}>
            <Box
                sx={{
                    m: 2,
                    height: 180,
                    backgroundColor: "#e3e3e3",
                    borderRadius: 2,
                }}
            ></Box>
            <form>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        my: 5,
                    }}
                >
                    <Box>
                        <Typography fontSize={12}>Product Name:</Typography>
                        <TextField size="small" fullWidth />
                    </Box>
                    <Box>
                        <Typography fontSize={12}>Price:</Typography>
                        <TextField size="small" fullWidth type="number" />
                    </Box>

                    <Box>
                        <Typography fontSize={12}>Description:</Typography>
                        <ProductDescriptionEditor />
                    </Box>

                    <Grid container>
                        <Grid item xs={6} px={3}>
                            <Button variant="contained" size="small" fullWidth>
                                Save
                            </Button>
                        </Grid>
                        <Grid item xs={6} px={3}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="small"
                                fullWidth
                            >
                                Cancel
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <Box px={6}>
                <Button variant="outlined" fullWidth>
                    Delete Product
                </Button>
            </Box>
        </AdminLayout>
    );
}
