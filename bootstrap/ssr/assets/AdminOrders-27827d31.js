import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { A as AdminLayout } from "./AdminLayout-2807199f.js";
import { Container, Box, Typography, Divider, Pagination } from "@mui/material";
import { Head, router, Link } from "@inertiajs/react";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "./BackButton-329f6560.js";
import "@mui/icons-material/ArrowCircleLeftOutlined.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function AdminOrders({ orders }) {
  const [currentPage, setCurrentPage] = useState(orders.current_page);
  const handleChange = (event, page) => {
    setCurrentPage(page);
    router.get(`order-history?page=${page}`);
  };
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return new Date(dateString).toLocaleDateString(void 0, options);
  };
  console.log(orders);
  return /* @__PURE__ */ jsxs(AdminLayout, { heading: "Order History", children: [
    /* @__PURE__ */ jsx(Head, { title: "Order History" }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          border: "1px solid #000000",
          p: 2,
          my: 2,
          borderRadius: 5,
          minHeight: "80vh"
        },
        children: [
          orders.data.map((order) => /* @__PURE__ */ jsxs(
            Box,
            {
              sx: {
                p: 2,
                my: 2,
                backgroundColor: "#efefef",
                borderRadius: 4,
                cursor: "pointer"
              },
              onClick: () => router.visit(
                route("adminSingleOrder", order.id)
              ),
              children: [
                /* @__PURE__ */ jsxs(
                  Box,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    },
                    children: [
                      /* @__PURE__ */ jsx(Typography, { fontSize: 10, children: formatDate(order.created_at) }),
                      /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
                        Link,
                        {
                          href: route(
                            "adminSingleOrder",
                            order.id
                          ),
                          children: order.status
                        }
                      ) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(Divider, {}),
                /* @__PURE__ */ jsxs(Box, { children: [
                  /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, children: order.user.name }),
                  order.order_items.map((item, index) => /* @__PURE__ */ jsxs(
                    Typography,
                    {
                      fontSize: 10,
                      display: "inline-block",
                      children: [
                        item.product.product_name,
                        ","
                      ]
                    },
                    index
                  ))
                ] })
              ]
            },
            order.id
          )),
          orders.data.length == 0 ? /* @__PURE__ */ jsx(
            Typography,
            {
              variant: "h6",
              fontWeight: 600,
              align: "center",
              mt: 5,
              children: "No orders right now!"
            }
          ) : /* @__PURE__ */ jsx(
            Box,
            {
              sx: {
                display: "flex",
                justifyContent: "center",
                my: 3
              },
              children: /* @__PURE__ */ jsx(
                Pagination,
                {
                  count: orders.last_page,
                  page: currentPage,
                  onChange: handleChange,
                  variant: "contained"
                }
              )
            }
          )
        ]
      }
    ) })
  ] });
}
export {
  AdminOrders as default
};
