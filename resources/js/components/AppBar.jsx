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
import { Link, router, usePage } from "@inertiajs/react";
import SearchBar from "./SearchBar";

export default function AppBar() {
    const user = usePage().props.auth;
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
            Title: "Cart",
            Link: "showCart",
        },
        {
            Title: "Account",
            Link: "account",
        },
        {
            Title: "My Order",
            Link: "userOrders",
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
                <Typography
                    color="primary"
                    zIndex={1000}
                    fontSize={22}
                    fontWeight={700}
                >
                    <Link className="inertia-link" href={route("home")}>
                        A2 Medical Supplies
                    </Link>
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "none", sm: "none", md: "block" },
                            zIndex: 1,
                        }}
                    >
                        <SearchBar />
                    </Box>

                    <IconButton onClick={toggleSidebar} sx={{ zIndex: 1 }}>
                        <FormatAlignLeftRoundedIcon />
                    </IconButton>
                </Box>
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
                                    Menu
                                </Typography>
                            </Box>

                            {/* MenuList start here  */}
                            <List>
                                {MenuList.map((Menu) => (
                                    <ListItem key={Menu.Title}>
                                        <Box
                                            sx={{
                                                width: 140,
                                                p: 2,
                                                mt: 1,
                                                borderRadius: 3,
                                                cursor: "pointer",
                                            }}
                                            bgcolor={
                                                route().current(Menu.Link)
                                                    ? "#db883b"
                                                    : "#efefef"
                                            }
                                            onClick={() =>
                                                router.get(route(Menu.Link))
                                            }
                                        >
                                            <Typography>
                                                {Menu.Title}
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                ))}
                                {user.user.is_admin == 1 ||
                                user.user.is_editor == 1 ? (
                                    <ListItem>
                                        <Link
                                            className="inertia-link"
                                            href={route("dashboard")}
                                            as="div"
                                        >
                                            <Box
                                                sx={{
                                                    backgroundColor: "grey",
                                                    width: 140,
                                                    p: 2,
                                                    mt: 1,
                                                    borderRadius: 3,
                                                }}
                                            >
                                                <Typography color="white">
                                                    Dashboard
                                                </Typography>
                                            </Box>
                                        </Link>
                                    </ListItem>
                                ) : (
                                    ""
                                )}
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
