import {
    Box,
    Container,
    Divider,
    Drawer,
    IconButton,
    InputAdornment,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded";
import BackButton from "../BackButton";
import { Link, usePage } from "@inertiajs/react";

export default function AdminBar(props) {
    const user = usePage().props.auth;
    const heading = props.heading;
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const MenuList = [
        {
            Title: "Home",
            Link: "home",
        },
        {
            Title: "Dashboard",
            Link: "dashboard",
        },
        {
            Title: "Add Product",
            Link: "addProduct",
        },
        {
            Title: "Products",
            Link: "dashboard",
        },
        {
            Title: "Orders",
            Link: "adminOrders",
        },
        {
            Title: "Drugs",
            Link: "allDrugs",
        },
        {
            Title: "Users",
            Link: "dashboard",
        },
    ];
    return (
        <Box>
            <Box
                sx={{
                    height: 60,
                    backgroundColor: "#f9f9f9",
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    mb: 2,
                }}
            >
                <Typography fontSize={22} fontWeight={700} zIndex={1}>
                    {heading !== "Dashboard" && <BackButton />}
                    {heading}
                </Typography>

                <IconButton onClick={toggleSidebar} sx={{ zIndex: 1 }}>
                    <FormatAlignLeftRoundedIcon />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={sidebarOpen}
                    onClose={toggleSidebar}
                    sx={{ width: "60%" }}
                >
                    {user.user !== null ? (
                        <Box
                            sx={{
                                width: 220, // Adjust this value as needed
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#ba7636",
                                    p: 2,
                                    mb: 4,
                                }}
                            >
                                <Typography
                                    fontSize={22}
                                    fontWeight={300}
                                    align="center"
                                    color="white"
                                    letterSpacing={2}
                                >
                                    Admin Site
                                </Typography>
                            </Box>

                            {/* MenuList start here  */}
                            <List>
                                {MenuList.map((Menu) => (
                                    <ListItem key={Menu.Title}>
                                        <Link
                                            href={route(Menu.Link)}
                                            className="inertia-link"
                                            as="div"
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: "#efefef",
                                                    width: 140,
                                                    p: 2,
                                                    mt: 1,
                                                    borderRadius: 3,
                                                }}
                                            >
                                                <Typography>
                                                    {Menu.Title}
                                                </Typography>
                                            </Box>
                                        </Link>
                                    </ListItem>
                                ))}
                                <ListItem>
                                    <Link
                                        className="inertia-link"
                                        href={route("logout")}
                                        method="post"
                                        as="div"
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: "red",
                                                width: 140,
                                                p: 2,
                                                mt: 1,
                                                borderRadius: 3,
                                            }}
                                        >
                                            <Typography color="white">
                                                Logout
                                            </Typography>
                                        </Box>
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    ) : (
                        <Box
                            sx={{
                                width: 220, // Adjust this value as needed
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "#ba7636",
                                    p: 2,
                                    mb: 4,
                                }}
                            >
                                <Typography
                                    fontSize={22}
                                    fontWeight={300}
                                    align="center"
                                    color="white"
                                    letterSpacing={2}
                                >
                                    Welcome
                                </Typography>
                            </Box>
                            <List>
                                <ListItem>
                                    <Link
                                        className="inertia-link"
                                        href={route("login")}
                                        as="div"
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: "#efefef",
                                                width: 140,
                                                p: 2,
                                                mt: 1,
                                                borderRadius: 3,
                                            }}
                                        >
                                            <Typography>Login</Typography>
                                        </Box>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link
                                        className="inertia-link"
                                        href={route("register")}
                                        as="div"
                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: "#efefef",
                                                width: 140,
                                                p: 2,
                                                mt: 1,
                                                borderRadius: 3,
                                            }}
                                        >
                                            <Typography>Register</Typography>
                                        </Box>
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                    )}
                </Drawer>
                <Box
                    sx={{
                        width: 390,
                        height: 60,
                        position: "absolute",
                        right: 0,
                        top: 0,
                        zIndex: 0,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="390"
                        height="60"
                        viewBox="0 0 390 60"
                        fill="none"
                    >
                        <path
                            d="M182.934 15.9125C47.1737 15.3468 4.41118 5.06844 0 0H390V93C377.545 67.5399 318.695 16.4783 182.934 15.9125Z"
                            fill="#EEEEEE"
                        />
                    </svg>
                </Box>
            </Box>
        </Box>
    );
}
