import { jsxs, jsx } from "react/jsx-runtime";
import { N as NumberWithComma } from "./NumberWithComma-3cc02953.js";
import { A as AccountLayout } from "./AccountLayout-d71c4777.js";
import { usePage, useForm, Head, router } from "@inertiajs/react";
import { Container, Box, Divider, Typography, Chip, Button } from "@mui/material";
import "react";
import { Carousel } from "react-responsive-carousel";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "@inertiajs/inertia-react";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
const carousel_min = ".carousel .control-arrow,.carousel.carousel-slider .control-arrow{transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{transition:all .15s ease-in;transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n";
function SingleProduct(props) {
  var _a;
  const product = props.product;
  const user = usePage().props.auth.user;
  const { data, post, errors, processing } = useForm({
    product_id: product.id,
    user_id: user.id,
    qty: 1
  });
  const handleAddToCart = (e) => {
    e.preventDefault();
    post(route("addToCart"), data);
  };
  return /* @__PURE__ */ jsxs(AccountLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: product.product_name }),
    /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
      /* @__PURE__ */ jsx(Box, { mb: 2, children: /* @__PURE__ */ jsx(
        Carousel,
        {
          dynamicHeight: true,
          infiniteLoop: true,
          showThumbs: false,
          children: product.images.map((image, index) => /* @__PURE__ */ jsx(
            Box,
            {
              sx: {
                borderRadius: 3,
                overflow: "hidden"
              },
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: `/storage/images/products/${image}`
                }
              )
            },
            index
          ))
        }
      ) }),
      /* @__PURE__ */ jsx(Divider, {}),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            mt: 2,
            mb: 5,
            display: "flex",
            gap: 2,
            flexDirection: "column"
          },
          children: [
            /* @__PURE__ */ jsxs(Typography, { fontSize: 15, fontWeight: 600, children: [
              product.product_name,
              " ",
              product.stock == 0 && /* @__PURE__ */ jsx(
                Chip,
                {
                  label: /* @__PURE__ */ jsx(Typography, { fontSize: 12, fontWeight: 400, children: "Preorder only" }),
                  size: "small",
                  color: "primary"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Typography, { fontSize: 17, fontWeight: 600, color: "primary", children: [
              /* @__PURE__ */ jsx(NumberWithComma, { value: product.price }),
              " Ks"
            ] }),
            /* @__PURE__ */ jsx(Divider, {}),
            /* @__PURE__ */ jsxs(Box, { mb: 4, children: [
              /* @__PURE__ */ jsx(Typography, { children: "Description" }),
              /* @__PURE__ */ jsx(
                Typography,
                {
                  px: 1,
                  fontSize: 13,
                  dangerouslySetInnerHTML: {
                    __html: (_a = product.description) == null ? void 0 : _a.replace(
                      '<img style="max-width: 80%; height: auto;"'
                    )
                  }
                }
              )
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 1,
          bgcolor: "#dedede",
          opacity: "90%"
        },
        children: /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              p: 2,
              display: "flex",
              justifyContent: "space-around",
              gap: 2,
              px: 4,
              width: 300,
              margin: "0 auto"
            },
            children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outlined",
                  fullWidth: true,
                  onClick: () => router.visit(route("home")),
                  children: "Go back Home"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "contained",
                  fullWidth: true,
                  onClick: handleAddToCart,
                  disabled: processing,
                  children: "Order Now"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
export {
  SingleProduct as default
};
