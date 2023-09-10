import React from "react";
import AccountLayout from "../../layouts/AccountLayout";
import {
    Backdrop,
    Box,
    Button,
    Container,
    Divider,
    Fade,
    Modal,
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
import { Head, router, useForm } from "@inertiajs/react";
import ApplicationLogo from "@/components/ApplicationLogo";
import { useState } from "react";

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

export default function SingleOrder(props) {
    const order = props.order;
    const { data, setData, put, processing, errors } = useForm({
        review: order.review_by_customer,
    });

    const handleSubmitReview = (e) => {
        e.preventDefault();
        put(route("reviewByCustomer", order.id), data);
        setOpen(false);
    };

    const handleDeleteReview = (e) => {
        e.preventDefault();
        put(route("deleteReview", order.id));
        setOpen(false);
        setData({ review: "" });
    };

    // Open the modal first, when the customer click Review this order button
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

    return (
        <AccountLayout>
            <Head title={order.user.name} />
            <Container maxWidth="xs">
                <Typography fontSize={12} color="primary" align="right">
                    Order date: {formatDate(order.created_at)}
                </Typography>
                <Box width="100%" display="flex" gap={2}>
                    <Box
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: "#efefef",
                            width: "60%",
                            my: 1,
                        }}
                    >
                        <Typography fontSize={12}>
                            Customer: <b>{order.user.name}</b>
                        </Typography>
                        <Typography fontSize={12}>
                            Invoice no: {order.order_number}
                        </Typography>
                        <Typography fontSize={12}></Typography>
                        <Typography fontSize={12}>
                            Address: <i>{order.address}</i>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            p: 2,
                            borderRadius: 2,
                            border: "2px solid #efefef",
                            backgroundColor: "#ffffff",
                            width: "20%",
                            my: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <ApplicationLogo />
                    </Box>
                </Box>
                <Box
                    sx={{
                        border: "1px solid #e3e3e3",
                        my: 3,
                        borderRadius: 2,
                        width: "100%",
                    }}
                >
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">
                                        <Typography fontSize={11}>
                                            Item
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontSize={11}>
                                            Price
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography fontSize={11}>
                                            Qty.
                                        </Typography>
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
                                                    value={
                                                        item.price * item.qty
                                                    }
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
                                        <Typography fontSize={11}>
                                            Total
                                        </Typography>
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
                        <Typography fontSize={11} align="center" my={3}>
                            Thank you for shopping with us. Items sold are not
                            exchangable.
                        </Typography>
                    </TableContainer>
                </Box>
                <Box
                    sx={{
                        my: 4,
                        border: "1px solid #e3e3e3",
                        borderRadius: 2,
                        display: "flex",
                        gap: 1,
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Box width="25%" display="flex" justifyContent="center">
                        <ApplicationLogo />
                    </Box>
                    <Box align="center">
                        <Typography fontSize={13}>
                            Phone: 09444845977, 09963851223
                        </Typography>
                        <Typography fontSize={13}>
                            a2pharmacy.mdy@gmail.com
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                {order.review_by_customer && (
                    <Box
                        sx={{
                            width: "100%",
                            my: 2,
                            borderRadius: 3,
                            backgroundColor: "#ba7636",
                        }}
                    >
                        <Box p={2}>
                            <Typography color="white" fontSize={14} mb={1}>
                                Your Review:
                            </Typography>
                            <Typography color="white" fontSize={13}>
                                <q>{data.review}</q>
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Box px={5} my={2}>
                    <Button variant="outlined" fullWidth onClick={handleOpen}>
                        {order.review_by_customer == null
                            ? " Review this order"
                            : "Edit my review"}
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
                                Review this order
                            </Typography>
                            <TextField
                                size="small"
                                placeholder="Your review here ..."
                                fullWidth
                                multiline
                                value={data.review}
                                onChange={(e) =>
                                    setData({ review: e.target.value })
                                }
                            />
                            <Box sx={{ mt: 4, mb: 2 }} align="center">
                                <Button
                                    onClick={handleSubmitReview}
                                    size="small"
                                    variant="contained"
                                    disabled={processing}
                                >
                                    Save
                                </Button>
                            </Box>
                            <Box>
                                <Button
                                    color="error"
                                    onClick={handleDeleteReview}
                                    disabled={processing}
                                >
                                    Delete Review
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </Container>
        </AccountLayout>
    );
}
