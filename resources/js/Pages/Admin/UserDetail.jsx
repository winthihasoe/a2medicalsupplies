import AdminLayout from "@/layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/react";
import {
    Box,
    Button,
    Divider,
    FormControl,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function UserDetail({ user }) {
    const [isEditing, setIsEditing] = useState(false);
    const { data, setData, put, errors } = useForm({
        ...user,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route("updateRole", user.id), data);
        setIsEditing(false);
    };

    console.log(data);
    return (
        <AdminLayout heading={"User Detail"}>
            <Head title={user.name} />

            <Box
                key={user.id}
                sx={{
                    bgcolor: "#feefee",
                    px: 8,
                    py: 2,
                    borderRadius: 3,
                    mb: 2,
                }}
            >
                <Typography fontSize={13} mt={4}>
                    Name:
                </Typography>
                <Typography fontSize={16} fontWeight={600} mb={2}>
                    {user.name}
                </Typography>
                <Divider variant="inset" />

                <Typography fontSize={13}>Email:</Typography>
                <Typography fontSize={16} fontWeight={600} mb={2}>
                    {user.email}
                </Typography>
                <Divider variant="inset" />

                <Typography fontSize={13}>Phone:</Typography>
                <Typography fontSize={16} fontWeight={600} mb={2}>
                    {user.phone}
                </Typography>
                <Divider variant="inset" />

                <Typography fontSize={13}>Admin:</Typography>
                <Typography fontSize={16} fontWeight={600} mb={2}>
                    {user.is_admin == 1 ? "Yes" : "No"}
                </Typography>
                <Divider variant="inset" />
                <Typography fontSize={13}>Editor:</Typography>
                <Typography fontSize={16} fontWeight={600} mb={2}>
                    {user.is_editor == 1 ? "Yes" : "No"}
                </Typography>
                <Divider variant="inset" />

                <Box textAlign="center" sx={{ my: 2 }}>
                    <Button
                        variant="outlined"
                        onClick={() => setIsEditing(!isEditing)}
                        size="small"
                    >
                        Change Role
                    </Button>
                </Box>

                {isEditing && (
                    <form onSubmit={handleSubmit}>
                        <FormControl sx={{ mt: 1, mb: 2, minWidth: 250 }}>
                            {/* --- Change to Admin --- */}
                            <label id="admin">Change to admin?</label>
                            <Select
                                labelId="admin"
                                id="admin"
                                value={data.is_admin}
                                name="is_admin"
                                onChange={handleChange}
                                size="small"
                            >
                                <MenuItem value={1}>Yes</MenuItem>
                                <MenuItem value={0}>No</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ mt: 1, mb: 2, minWidth: 250 }}>
                            {/* --- Change to Editor --- */}
                            <label id="editor">Change to editor?</label>
                            <Select
                                labelId="editor"
                                id="editor"
                                value={data.is_editor}
                                name="is_editor"
                                onChange={handleChange}
                                size="small"
                            >
                                <MenuItem value={1}>Yes</MenuItem>
                                <MenuItem value={0}>No</MenuItem>
                            </Select>
                        </FormControl>
                        <Box textAlign="center" mb={4}>
                            <Button
                                variant="contained"
                                type="submit"
                                color="success"
                            >
                                Save
                            </Button>
                            <Button onClick={() => setIsEditing(false)}>
                                Cancel
                            </Button>
                        </Box>
                    </form>
                )}
            </Box>
        </AdminLayout>
    );
}
