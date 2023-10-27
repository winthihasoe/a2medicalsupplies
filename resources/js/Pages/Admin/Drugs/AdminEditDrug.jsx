import PopUp from "@/components/PopUp";
import AdminLayout from "@/layouts/AdminLayout";
import { useForm } from "@inertiajs/inertia-react";
import { Head, router } from "@inertiajs/react";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

export default function AdminEditDrug({ drug }) {
    const { data, setData, put, errors, processing } = useForm({
        ...drug,
    });

    const [dataChanging, setDataChanging] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
        setDataChanging(true);
    };

    const [open, setOpen] = useState(false);

    const handleDeleteDrug = (e) => {
        e.preventDefault();
        router.delete(route("deleteDrug", drug.id));
    };
    return (
        <AdminLayout heading={"Edit Drug"}>
            <Head title="Edit Drug" />
            <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
            >
                <TextField
                    size="small"
                    onChange={handleChange}
                    name="drug_name"
                    type="text"
                    required
                    fullWidth
                    value={data.drug_name}
                    label={
                        <Typography display="inline-block" fontSize={12}>
                            Drug name
                        </Typography>
                    }
                />
                <TextField
                    size="small"
                    onChange={handleChange}
                    name="retail_price"
                    required
                    type="number"
                    fullWidth
                    value={data.retail_price}
                    label={
                        <Typography display="inline-block" fontSize={12}>
                            Retail price
                        </Typography>
                    }
                />
                <TextField
                    size="small"
                    onChange={handleChange}
                    name="dr_price"
                    type="number"
                    required
                    fullWidth
                    value={data.dr_price}
                    label={
                        <Typography display="inline-block" fontSize={12}>
                            Doctor price
                        </Typography>
                    }
                />
                <TextField
                    size="small"
                    onChange={handleChange}
                    name="buying_price"
                    type="number"
                    required
                    fullWidth
                    value={data.buying_price}
                    label={
                        <Typography display="inline-block" fontSize={12}>
                            Purchase price
                        </Typography>
                    }
                />
                <TextField
                    size="small"
                    onChange={handleChange}
                    name="supplier"
                    type="text"
                    required
                    fullWidth
                    value={data.supplier}
                    label={
                        <Typography display="inline-block" fontSize={12}>
                            Supplier
                        </Typography>
                    }
                />
                <TextField
                    size="small"
                    onChange={handleChange}
                    name="purchase_date"
                    type="text"
                    required
                    fullWidth
                    value={data.purchase_date}
                    label={
                        <Typography display="inline-block" fontSize={12}>
                            Purchased date
                        </Typography>
                    }
                />
            </Box>
            {/* Button section  */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    my: 3,
                    px: 3,
                    gap: 3,
                }}
            >
                <Button
                    onClick={() =>
                        router.put(route("updateDrug", drug.id), data)
                    }
                    fullWidth
                    size="small"
                    variant="contained"
                    disabled={processing || !dataChanging}
                >
                    Update
                </Button>
                <Button
                    onClick={() =>
                        router.visit(route("adminSingleDrug", drug.id))
                    }
                    fullWidth
                    size="small"
                    variant="outlined"
                >
                    Cancel
                </Button>
            </Box>
            <Box px={3}>
                <Button
                    fullWidth
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => setOpen(true)}
                >
                    Delete Drug
                </Button>
            </Box>
            <PopUp open={open} setOpen={setOpen}>
                <Typography variant="h6" mb={2}>
                    Delete this drug: {drug.drug_name}?
                </Typography>
                {/* Button section  */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        my: 3,
                        px: 3,
                        gap: 3,
                    }}
                >
                    <Button
                        onClick={handleDeleteDrug}
                        fullWidth
                        size="small"
                        variant="contained"
                    >
                        Yes
                    </Button>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={() => setOpen(false)}
                    >
                        No
                    </Button>
                </Box>
            </PopUp>
        </AdminLayout>
    );
}
