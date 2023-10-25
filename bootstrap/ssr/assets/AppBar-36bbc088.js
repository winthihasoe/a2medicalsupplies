import { jsx, jsxs } from "react/jsx-runtime";
import { Box, TextField, InputAdornment, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import { useState } from "react";
import FormatAlignLeftRoundedIcon from "@mui/icons-material/FormatAlignLeftRounded.js";
import { usePage, router, Link } from "@inertiajs/react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded.js";
import { useForm } from "@inertiajs/inertia-react";
function SearchBar() {
  const categories = usePage().props.categories;
  const random = Math.floor(Math.random() * categories[0].length);
  const { data, setData, errors } = useForm({
    keywords: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const keyPress = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      router.get(route("searchEverything"), data);
    }
  };
  return /* @__PURE__ */ jsx(Box, { sx: { my: 2, width: 350, margin: "0 auto" }, children: /* @__PURE__ */ jsx(
    TextField,
    {
      fullWidth: true,
      placeholder: categories[0][random].category_name + " ...",
      size: "small",
      InputProps: {
        endAdornment: /* @__PURE__ */ jsx(InputAdornment, { position: "start", children: /* @__PURE__ */ jsx(SearchRoundedIcon, {}) })
      },
      onChange: handleChange,
      onKeyDown: keyPress,
      value: data.keywords,
      name: "keywords",
      sx: { border: "1px solid #ababab" }
    }
  ) });
}
function AppBar() {
  const user = usePage().props.auth;
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
      Title: "Cart",
      Link: "showCart"
    },
    {
      Title: "Account",
      Link: "account"
    },
    {
      Title: "My Order",
      Link: "userOrders"
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
        /* @__PURE__ */ jsx(Typography, { color: "primary", fontSize: 22, fontWeight: 700, children: /* @__PURE__ */ jsx(Link, { className: "inertia-link", href: route("home"), children: "A2 Medical Supplies" }) }),
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 3
            },
            children: [
              /* @__PURE__ */ jsx(
                Box,
                {
                  sx: {
                    display: { xs: "none", sm: "none", md: "block" },
                    zIndex: 1
                  },
                  children: /* @__PURE__ */ jsx(SearchBar, {})
                }
              ),
              /* @__PURE__ */ jsx(IconButton, { onClick: toggleSidebar, sx: { zIndex: 1 }, children: /* @__PURE__ */ jsx(FormatAlignLeftRoundedIcon, {}) })
            ]
          }
        ),
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
                          children: "Menu"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(List, { children: [
                    MenuList.map((Menu) => /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(
                      Box,
                      {
                        sx: {
                          width: 140,
                          p: 2,
                          mt: 1,
                          borderRadius: 3,
                          cursor: "pointer"
                        },
                        bgcolor: route().current(Menu.Link) ? "#db883b" : "#efefef",
                        onClick: () => router.get(route(Menu.Link)),
                        children: /* @__PURE__ */ jsx(Typography, { children: Menu.Title })
                      }
                    ) }, Menu.Title)),
                    user.user.is_admin == 1 || user.user.is_editor == 1 ? /* @__PURE__ */ jsx(ListItem, { children: /* @__PURE__ */ jsx(
                      Link,
                      {
                        className: "inertia-link",
                        href: route("dashboard"),
                        as: "div",
                        children: /* @__PURE__ */ jsx(
                          Box,
                          {
                            sx: {
                              backgroundColor: "grey",
                              width: 140,
                              p: 2,
                              mt: 1,
                              borderRadius: 3
                            },
                            children: /* @__PURE__ */ jsx(Typography, { color: "white", children: "Dashboard" })
                          }
                        )
                      }
                    ) }) : "",
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
export {
  AppBar as A,
  SearchBar as S
};
