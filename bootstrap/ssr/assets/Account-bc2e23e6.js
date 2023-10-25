import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Container, Box, Typography, Divider } from "@mui/material";
import { A as AccountLayout } from "./AccountLayout-d71c4777.js";
import { Head, Link } from "@inertiajs/react";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function Account() {
  const AccountMenus = [
    {
      Title: "Profile",
      Button: "edit",
      Link: "/profile"
    },
    {
      Title: "Cart",
      Button: "view",
      Link: "cart"
    },
    {
      Title: "My orders",
      Button: "view",
      Link: "my-orders"
    },
    {
      Title: "Address",
      Button: "edit",
      Link: "address"
    }
  ];
  return /* @__PURE__ */ jsxs(AccountLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Account" }),
    /* @__PURE__ */ jsx(Container, { maxWidth: "xs", children: /* @__PURE__ */ jsx(Box, { sx: { p: 2 }, children: AccountMenus.map((Menu) => /* @__PURE__ */ jsxs(Box, { children: [
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            my: 3
          },
          children: [
            /* @__PURE__ */ jsx(Typography, { fontSize: 22, fontWeight: 700, children: Menu.Title }),
            /* @__PURE__ */ jsx(Link, { href: Menu.Link, children: Menu.Button })
          ]
        }
      ),
      /* @__PURE__ */ jsx(Divider, {})
    ] })) }) })
  ] });
}
export {
  Account as default
};
