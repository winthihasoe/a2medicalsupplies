import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
    Box,
    Button,
    Divider,
    Grid,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export default function AdminSingleOrder() {
    return (
        <AdminLayout heading={"Single Order History"}>
            <Box
                sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#efefef",
                    width: 250,
                    my: 4,
                }}
            >
                <Typography fontSize={12}>
                    Customer: Hin thar education
                </Typography>
                <Typography fontSize={12}>Invoice no: 123456789</Typography>
                <Typography fontSize={12}>Order date: 12-12-23</Typography>
                <Typography fontSize={12}>Address: Yankin, Yangon</Typography>
            </Box>
            <Box
                sx={{
                    border: "1px solid #e3e3e3",
                    p: 1,
                    my: 3,
                    borderRadius: 5,
                }}
            >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Item</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Qty.</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center">
                                    <b>Nursing Manikin</b>
                                </TableCell>
                                <TableCell>1,650,000</TableCell>
                                <TableCell align="right">2</TableCell>

                                <TableCell align="right">3,200,000</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">3,200,000</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">3,200,000</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                sx={{
                    p: 1,
                    my: 4,
                    border: "1px solid #e3e3e3",
                    borderRadius: 2,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    width: 300,
                }}
            >
                <Box>
                    <img src="/images/logo.jpg" width={80} />
                </Box>
                <Box>
                    <Typography fontSize={13}>
                        Phone: 09444845977, 09963851223
                    </Typography>
                    <Typography fontSize={13}>
                        a2pharmacy.mdy@gmail.com
                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Grid container>
                <Grid item xs={6} align="center">
                    <Box my={3}>
                        <Select size="small" value="pending">
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="processing">Processing</MenuItem>
                            <MenuItem value="shipped">Shipped</MenuItem>
                            <MenuItem value="delivered">Delivered</MenuItem>
                            <MenuItem value="cancelled">Cancelled</MenuItem>
                        </Select>
                    </Box>
                </Grid>
                <Grid item xs={6} align="center">
                    <Box my={3}>
                        <Button variant="contained" color="secondary">
                            Edit address
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Box px={5}>
                <Button variant="contained" fullWidth>
                    Save
                </Button>
            </Box>
        </AdminLayout>
    );
}
