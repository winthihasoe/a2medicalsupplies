import { jsx, jsxs } from "react/jsx-runtime";
import { Box, Typography, Grid, Chip, IconButton } from "@mui/material";
import { createContext, useContext } from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded.js";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { Link, router } from "@inertiajs/react";
import AddIcon from "@mui/icons-material/Add.js";
import RemoveIcon from "@mui/icons-material/Remove.js";
const CartItemContext = createContext();
function CartQtyToggle() {
  const { cart, setIncrease, setDecrease } = useContext(CartItemContext);
  return /* @__PURE__ */ jsx(
    Box,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
      },
      children: /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 1,
            border: "1px solid #ededed",
            borderRadius: 3
          },
          children: [
            /* @__PURE__ */ jsx(RemoveIcon, { fontSize: "small", onClick: setDecrease }),
            /* @__PURE__ */ jsx(Typography, { bgcolor: "#dedede", p: 1, sx: { fontSize: 10 }, children: cart.qty }),
            /* @__PURE__ */ jsx(AddIcon, { fontSize: "small", onClick: setIncrease })
          ]
        }
      )
    }
  );
}
function CartItemCard(props) {
  const cart = props.cart;
  let qty = cart.qty;
  const handleDeleteCart = (e) => {
    e.preventDefault();
    router.delete(route("deleteCart", cart.id));
  };
  const setIncrease = (e) => {
    if (cart.qty < cart.product.stock) {
      qty += 1;
      handleSubmitQty(e);
    }
  };
  const setDecrease = (e) => {
    if (cart.qty > 1) {
      qty -= 1;
      handleSubmitQty(e);
    }
  };
  const handleSubmitQty = (e) => {
    e.preventDefault();
    router.put(route("changeCartQty", cart.id), { qty });
  };
  return /* @__PURE__ */ jsx(CartItemContext.Provider, { value: { cart, setIncrease, setDecrease }, children: /* @__PURE__ */ jsx(
    Box,
    {
      sx: {
        p: 1,
        borderRadius: 2,
        my: 2,
        borderRadius: 5,
        border: "1px solid #dedede"
      },
      children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 1, alignItems: "center", children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 4, children: /* @__PURE__ */ jsx(
          Link,
          {
            href: route("singleProduct", cart.product.id),
            className: "inertia-link",
            children: /* @__PURE__ */ jsx(
              Box,
              {
                sx: {
                  width: 100,
                  height: 73,
                  backgroundColor: "#efefef",
                  borderRadius: 4,
                  overflow: "hidden"
                },
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: `/storage/images/products/${cart.product.images[0]}`,
                    width: "100%"
                  }
                )
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 5, children: /* @__PURE__ */ jsxs(
          Link,
          {
            href: route("singleProduct", cart.product.id),
            className: "inertia-link",
            children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 13, fontWeight: 400, children: cart.product.product_name.length > 25 ? cart.product.product_name.substr(0, 25) + "..." : cart.product.product_name }),
              /* @__PURE__ */ jsxs(Typography, { sx: { fontWeight: 900, fontSize: 16 }, children: [
                /* @__PURE__ */ jsx(NumberWithComma, { value: cart.product.price }),
                " ",
                "Ks"
              ] }),
              cart.product.stock == 0 && /* @__PURE__ */ jsx(
                Chip,
                {
                  label: "Preorder only",
                  size: "small",
                  variant: "outlined"
                }
              ),
              cart.product.stock == 1 && /* @__PURE__ */ jsx(Typography, { fontSize: 9, color: "red", children: "Only 1 item left" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 3, children: /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(IconButton, { onClick: handleDeleteCart, children: /* @__PURE__ */ jsx(DeleteRoundedIcon, { fontSize: "small" }) }),
              /* @__PURE__ */ jsx(CartQtyToggle, {})
            ]
          }
        ) })
      ] })
    }
  ) });
}
export {
  CartItemCard as C
};
