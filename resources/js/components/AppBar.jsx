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
import { InertiaLink } from "@inertiajs/inertia-react";

export default function AppBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const MenuList = [
        {
            Title: "Home",
            Link: "/",
        },
        {
            Title: "Cart",
            Link: "/cart",
        },
        {
            Title: "Account",
            Link: "/account",
        },
        {
            Title: "Dashboard",
            Link: "/dashboard",
        },
        {
            Title: "Logout",
            Link: "/logout",
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
                <Typography color="primary" fontSize={22} fontWeight={700}>
                    <InertiaLink className="inertia-link" href="/">
                        A2 Medical Supplies
                    </InertiaLink>
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
                                <ListItem>
                                    <InertiaLink
                                        href={Menu.Link}
                                        className="inertia-link"
                                    >
                                        {Menu.Title == "Logout" && <Divider />}
                                        {Menu.Title == "Logout" ? (
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
                                                    {Menu.Title}
                                                </Typography>
                                            </Box>
                                        ) : (
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
                                        )}
                                    </InertiaLink>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
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
