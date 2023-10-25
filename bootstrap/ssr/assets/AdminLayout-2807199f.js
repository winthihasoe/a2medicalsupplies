import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Typography, IconButton, Drawer, List, ListItem, Container } from "@mui/material";
import { useState } from "react";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded.js";
import { B as BackButton } from "./BackButton-329f6560.js";
import { usePage, router, Link } from "@inertiajs/react";
import { F as FlashMessage } from "./FlashMessage-1db13e54.js";
function AdminBar(props) {
  const user = usePage().props.auth;
  const heading = props.heading;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const MenuList = [
    {
      Title: "Home",
      Link: "home"
    },
    {
      Title: "Dashboard",
      Link: "dashboard"
    },
    {
      Title: "Add Product",
      Link: "addProduct"
    },
    {
      Title: "Products",
      Link: "adminProducts"
    },
    {
      Title: "Orders",
      Link: "adminOrders"
    },
    {
      Title: "Drugs",
      Link: "allDrugs"
    },
    {
      Title: "Users",
      Link: "allUsers"
    }
  ];
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        height: 60,
        backgroundColor: "#f9f9f9",
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        mb: 2
      },
      children: [
        heading !== "Dashboard" && /* @__PURE__ */ jsx(BackButton, {}),
        /* @__PURE__ */ jsx(Typography, { fontSize: 22, fontWeight: 700, zIndex: 1, children: heading }),
        /* @__PURE__ */ jsx(IconButton, { onClick: toggleSidebar, sx: { zIndex: 1 }, children: /* @__PURE__ */ jsx(FormatAlignLeftRoundedIcon, {}) }),
        /* @__PURE__ */ jsx(
          Drawer,
          {
            anchor: "right",
            open: sidebarOpen,
            onClose: toggleSidebar,
            sx: { width: "60%" },
            children: user.user !== null ? /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  width: 220
                  // Adjust this value as needed
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Box,
                    {
                      sx: {
                        backgroundColor: "#ba7636",
                        p: 2,
                        mb: 4
                      },
                      children: /* @__PURE__ */ jsx(
                        Typography,
                        {
                          fontSize: 22,
                          fontWeight: 300,
                          align: "center",
                          color: "white",
                          letterSpacing: 2,
                          children: "Admin Site"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(List, { children: [
                    MenuList.map((Menu) => /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(
                      Typography,
                      {
                        color: route().current(Menu.Link) ? "white" : "black",
                        bgcolor: route().current(Menu.Link) ? "orange" : "#dedede",
                        sx: {
                          width: 140,
                          p: 2,
                          mt: 1,
                          borderRadius: 3,
                          cursor: "pointer"
                        },
                        onClick: () => {
                          router.get(route(Menu.Link));
                        },
                        children: Menu.Title
                      }
                    ) }, Menu.Title)),
                    /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        className: "inertia-link",
                        href: route("logout"),
                        method: "post",
                        as: "div",
                        children: /* @__PURE__ */ jsx(
                          Box,
                          {
                            sx: {
                              backgroundColor: "red",
                              width: 140,
                              p: 2,
                              mt: 1,
                              borderRadius: 3
                            },
                            children: /* @__PURE__ */ jsx(Typography, { color: "white", children: "Logout" })
                          }
                        )
                      }
                    ) })
                  ] })
                ]
              }
            ) : /* @__PURE__ */ jsxs(
              Box,
              {
                sx: {
                  width: 220
                  // Adjust this value as needed
                },
                children: [
                  /* @__PURE__ */ jsx(
                    Box,
                    {
                      sx: {
                        backgroundColor: "#ba7636",
                        p: 2,
                        mb: 4
                      },
                      children: /* @__PURE__ */ jsx(
                        Typography,
                        {
                          fontSize: 22,
                          fontWeight: 300,
                          align: "center",
                          color: "white",
                          letterSpacing: 2,
                          children: "Welcome"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(List, { children: [
                    /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        className: "inertia-link",
                        href: route("login"),
                        as: "div",
                        children: /* @__PURE__ */ jsx(
                          Box,
                          {
                            sx: {
                              backgroundColor: "#efefef",
                              width: 140,
                              p: 2,
                              mt: 1,
                              borderRadius: 3
                            },
                            children: /* @__PURE__ */ jsx(Typography, { children: "Login" })
                          }
                        )
                      }
                    ) }),
                    /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        className: "inertia-link",
                        href: route("register"),
                        as: "div",
                        children: /* @__PURE__ */ jsx(
                          Box,
                          {
                            sx: {
                              backgroundColor: "#efefef",
                              width: 140,
                              p: 2,
                              mt: 1,
                              borderRadius: 3
                            },
                            children: /* @__PURE__ */ jsx(Typography, { children: "Register" })
                          }
                        )
                      }
                    ) })
                  ] })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: 390,
              height: 60,
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 0
            },
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "390",
                height: "60",
                viewBox: "0 0 390 60",
                fill: "none",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    d: "M182.934 15.9125C47.1737 15.3468 4.41118 5.06844 0 0H390V93C377.545 67.5399 318.695 16.4783 182.934 15.9125Z",
                    fill: "#EEEEEE"
                  }
                )
              }
            )
          }
        )
      ]
    }
  ) });
}
function AdminLayout({ children, heading }) {
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsx(FlashMessage, {}),
    /* @__PURE__ */ jsx(AdminBar, { heading }),
    /* @__PURE__ */ jsx(Container, { component: "main", maxWidth: "xs", children })
  ] });
}
export {
  AdminLayout as A
};
