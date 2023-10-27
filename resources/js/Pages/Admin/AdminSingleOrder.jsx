import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import {
    Backdrop,
    Box,
    Button,
    Divider,
    Fade,
    Grid,
    MenuItem,
    Modal,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import NumberWithComma from "@/components/NumberWithComma";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import { Head } from "@inertiajs/react";

const formatDate = (dateString) => {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function AdminSingleOrder({ order }) {
    const { data, setData, put, errors, processing } = useForm({
        ...order,
    });

    const handleChangeStatus = (e) => {
        const newStatus = e.target.value;
        setData({ ...data, status: newStatus });
    };

    const handleSubmitStatus = (e) => {
        e.preventDefault();
        put(route("adminUpdateOrder", order.id), data);
    };

    // Open the modal first, when the admin click "Edit address" button
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: { xs: "70%", sm: "50%", md: 390 },
        bgcolor: "background.paper",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
    };

    const handleSubmitAddress = (e) => {
        e.preventDefault();
        put(route("updateAddressByAdmin", order.id), data);
    };

    return (
        <AdminLayout heading={"Single Order History"}>
            <Head title="Order detail" />
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
                    Customer: {order.user.name}
                </Typography>
                <Typography fontSize={12}>
                    Invoice no: {order.order_number}
                </Typography>
                <Typography fontSize={12}>
                    Order date: {formatDate(order.created_at)}
                </Typography>
                <Typography fontSize={12}>Address: {order.address}</Typography>
            </Box>
            <Box
                sx={{
                    border: "1px solid #e3e3e3",
                    my: 3,
                    borderRadius: 2,
                }}
            >
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    <Typography fontSize={11}>Item</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography fontSize={11}>Price</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography fontSize={11}>Qty.</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography fontSize={11}>
                                        Amount
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {order.order_items.map((item) => (
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography
                                            fontSize={12}
                                            fontWeight={600}
                                        >
                                            {item.product.product_name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography fontSize={11}>
                                            <NumberWithComma
                                                value={item.price}
                                            />{" "}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography fontSize={11}>
                                            {item.qty}
                                        </Typography>
                                    </TableCell>

                                    <TableCell align="right">
                                        <Typography fontSize={11}>
                                            <NumberWithComma
                                                value={item.price * item.qty}
                                            />
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}

                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>
                                    <Typography fontSize={11}>
                                        Subtotal
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography fontSize={12}>
                                        <NumberWithComma
                                            value={order.total_amount}
                                        />
                                    </Typography>{" "}
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell colSpan={2}>
                                    <Typography fontSize={11}>Total</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography fontSize={12}>
                                        <NumberWithComma
                                            value={order.total_amount}
                                        />{" "}
                                        Ks
                                    </Typography>
                                </TableCell>
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
                    width: 280,
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
                        <Select
                            size="small"
                            value={data.status}
                            onChange={handleChangeStatus}
                        >
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
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleOpen}
                        >
                            Edit address
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Box px={5} mb={4}>
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmitStatus}
                    disabled={processing || order.status == data.status}
                >
                    Save
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                            mb={2}
                        >
                            Customer address
                        </Typography>
                        <TextField
                            size="small"
                            placeholder="Your review here ..."
                            fullWidth
                            multiline
                            value={data.address}
                            onChange={(e) =>
                                setData({ ...data, address: e.target.value })
                            }
                        />
                        <Box sx={{ mt: 4, mb: 2 }} align="center">
                            <Button
                                onClick={handleSubmitAddress}
                                size="small"
                                variant="contained"
                                disabled={
                                    processing || order.address == data.address
                                }
                            >
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </AdminLayout>
    );
}
