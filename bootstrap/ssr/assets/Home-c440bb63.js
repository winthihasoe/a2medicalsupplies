import { jsx, jsxs } from "react/jsx-runtime";
import "@inertiajs/inertia-react";
import { Box, Typography, Grid, Container, Divider } from "@mui/material";
import React__default from "react";
import { U as UserLayout } from "./UserLayout-c9437c70.js";
import { router, Head } from "@inertiajs/react";
import "@inertiajs/inertia";
import "./AppBar-36bbc088.js";
import "@mui/icons-material/FormatAlignLeftRounded.js";
import "@mui/icons-material/SearchRounded.js";
import "./FlashMessage-1db13e54.js";
import "@mui/material/Snackbar/index.js";
import "@mui/material/IconButton/index.js";
import "@mui/icons-material/Close.js";
function Footer() {
  return /* @__PURE__ */ jsx(
    Box,
    {
      sx: {
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 3,
        mb: 2
      },
      children: /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            gap: 1,
            alignItems: "flex-end"
          },
          children: [
            /* @__PURE__ */ jsx(Typography, { fontWeight: 500, fontSize: 12, children: "Copyright@2023" }),
            /* @__PURE__ */ jsx(Typography, { color: "primary", fontWeight: 700, fontSize: 15, children: "A2 Medical supply" })
          ]
        }
      )
    }
  );
}
function ManikinHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: 165,
        height: 239,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer"
      },
      onClick: () => router.get(route("manikins")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              height: "30%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 700, align: "center", children: "Nursing Manikin" })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/products/nursing_manikins.jpg",
                alt: "",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function CPRHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: 174,
        height: 109,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer"
      },
      onClick: () => router.get(route("cpr")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, children: "CPR" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/CPR.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  );
}
function SkeletonHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: 174,
        height: 109,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer"
      },
      onClick: () => router.get(route("skeleton")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, children: "Skeleton" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/skeleton.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  );
}
function MicroscopeHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: 348,
        height: 150,
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 5,
        background: "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
        overflow: "hidden",
        cursor: "pointer",
        margin: "0 auto"
      },
      onClick: () => router.get(route("microscope")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 22, fontWeight: 600, children: "Microscope" })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/products/microscope.jpg",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function AestheticsHome() {
  return /* @__PURE__ */ jsxs(Box, { sx: { cursor: "pointer" }, onClick: () => router.get("aesthetic"), children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          width: 132,
          height: 132,
          borderRadius: "50%",
          backgroundColor: "#f6eded",
          mb: 1,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsx("img", { src: "/images/products/aesthetic.jpg", width: "100%" })
      }
    ),
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", align: "center", children: "Aesthetics" })
  ] });
}
function ChildDummyHome() {
  return /* @__PURE__ */ jsxs(Box, { sx: { cursor: "pointer" }, onClick: () => router.get("aesthetic"), children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          width: 132,
          height: 132,
          borderRadius: "50%",
          backgroundColor: "#f6eded",
          mb: 1,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsx("img", { src: "/images/products/child.jpg", height: "100%" })
      }
    ),
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", align: "center", children: "Child Dummy" })
  ] });
}
function InjectionArm() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: 348,
        height: 150,
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 5,
        background: "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
        overflow: "hidden",
        cursor: "pointer",
        margin: "0 auto"
      },
      onClick: () => router.get(route("injectionArm")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/products/injection_arm.jpg",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            p: 2,
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 22, fontWeight: 600, children: "Arm IV practice model" })
          }
        )
      ]
    }
  );
}
function EtTubeHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: 348,
        height: 150,
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 5,
        background: "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
        overflow: "hidden",
        cursor: "pointer",
        margin: "0 auto"
      },
      onClick: () => router.get(route("etTube")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/products/ET_tube.jpg",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "40%",
            p: 2,
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 18, fontWeight: 600, children: "ET tube insertion practice model" })
          }
        )
      ]
    }
  );
}
function AnatomyHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 239,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        cursor: "pointer"
      },
      onClick: () => router.get(route("anatomy")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              height: "20%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 700, align: "center", children: "Anatomy Torso" })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/products/anatomy.jpg",
                alt: "",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function HeartHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 109,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer"
      },
      onClick: () => router.get(route("heart")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, p: 1, align: "center", children: "Heart Model" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/heart_model.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  );
}
function OvaryHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 109,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer"
      },
      onClick: () => router.get(route("ovary")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, align: "center", children: "Uterus & Ovary model" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/ovary.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  );
}
function ButtockHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 150,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      },
      onClick: () => router.get(route("buttock")),
      children: [
        /* @__PURE__ */ jsx(Box, { sx: { height: "70%" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/buttock_injection.jpg",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) }),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, align: "center", children: "Buttock IM practice model" })
          }
        )
      ]
    }
  );
}
function DeliveryHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 150,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      },
      onClick: () => router.get(route("delivery")),
      children: [
        /* @__PURE__ */ jsx(Box, { sx: { height: "70%" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/delivery.jpg",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) }),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, align: "center", children: "Delivery practice model" })
          }
        )
      ]
    }
  );
}
function PosterHome() {
  return /* @__PURE__ */ jsxs(Box, { children: [
    /* @__PURE__ */ jsxs(
      Box,
      {
        sx: {
          display: "flex",
          justifyContent: "ceneter",
          alignItems: "center",
          border: "1px solid #000000",
          borderRadius: 3,
          height: 200,
          overflow: "hidden",
          cursor: "pointer"
        },
        onClick: () => router.get("posters"),
        children: [
          /* @__PURE__ */ jsx("img", { src: "/images/products/poster1.jpg", alt: "", height: "100%" }),
          /* @__PURE__ */ jsx("img", { src: "/images/products/poster2.jpg", alt: "", height: "100%" }),
          /* @__PURE__ */ jsx("img", { src: "/images/products/poster3.jpg", alt: "", height: "100%" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(Typography, { fontSize: 15, mt: 2, gutterBottom: true, align: "center", children: "-- Medical Posters --" })
  ] });
}
function SkullHome() {
  return /* @__PURE__ */ jsxs(Box, { sx: { cursor: "pointer" }, onClick: () => router.get("skull"), children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          width: { xs: 100, sm: 110, md: 120 },
          height: { xs: 100, sm: 110, md: 120 },
          borderRadius: "50%",
          backgroundColor: "#f6eded",
          border: "2px solid orange",
          mb: 1,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsx("img", { src: "/images/products/skull.jpg", height: "100%" })
      }
    ),
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", align: "center", children: "Skull Model" })
  ] });
}
function SkinHome() {
  return /* @__PURE__ */ jsxs(Box, { sx: { cursor: "pointer" }, onClick: () => router.get("skin"), children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          width: { xs: 100, sm: 110, md: 120 },
          height: { xs: 100, sm: 110, md: 120 },
          borderRadius: "50%",
          backgroundColor: "#f6eded",
          border: "2px solid orange",
          mb: 1,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsx("img", { src: "/images/products/skin.jpg", height: "100%" })
      }
    ),
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", align: "center", children: "Skin Model" })
  ] });
}
function PregnancyHome() {
  return /* @__PURE__ */ jsxs(Box, { sx: { cursor: "pointer" }, onClick: () => router.get("pregnancy"), children: [
    /* @__PURE__ */ jsx(
      Box,
      {
        sx: {
          width: { xs: 100, sm: 110, md: 120 },
          height: { xs: 100, sm: 110, md: 120 },
          borderRadius: "50%",
          backgroundColor: "#f6eded",
          border: "2px solid orange",
          mb: 1,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsx("img", { src: "/images/products/pregnancy.jpg", height: "100%" })
      }
    ),
    /* @__PURE__ */ jsx(Typography, { variant: "subtitle1", align: "center", children: "Pregnancy Model" })
  ] });
}
function CervicalHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 109,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer"
      },
      onClick: () => router.get(route("cervical")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, p: 1, align: "center", children: "Cervical vertebra Model" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/cervical.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  );
}
function BreastHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 109,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        cursor: "pointer"
      },
      onClick: () => router.get(route("breast")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 16, fontWeight: 600, p: 1, align: "center", children: "Breast Model" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/breast.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  );
}
function BloodCollectionNeedleHome() {
  return /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        display: "flex",
        justifyContent: "ceneter",
        alignItems: "center",
        border: "1px solid #dedede",
        borderRadius: 4,
        height: 150,
        width: "100%",
        overflow: "hidden",
        cursor: "pointer"
      },
      onClick: () => router.get("needle"),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            p: 2,
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 18, align: "right", fontWeight: 600, children: "Blood Collection Needles" })
          }
        ),
        /* @__PURE__ */ jsx(Box, { width: "50%", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/bloodCollectionNeedle.jpg",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) })
      ]
    }
  ) });
}
function SutureKitHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 150,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      },
      onClick: () => router.get(route("suture")),
      children: [
        /* @__PURE__ */ jsx(Box, { sx: { height: "70%" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/sutureKit.jpg",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) }),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30%"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, align: "center", children: "Suture Kit" })
          }
        )
      ]
    }
  );
}
function DressingBoxHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 150,
        flexShrink: 0,
        border: "1px solid #d2d2d2",
        borderRadius: 5,
        backgroundColor: "#f6eded",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer"
      },
      onClick: () => router.get(route("dressing")),
      children: [
        /* @__PURE__ */ jsx(Box, { sx: { height: "70%" }, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/products/dressingSet.jpg",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }
          }
        ) }),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30%"
            },
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 14, fontWeight: 600, align: "center", children: "Dressing Box" })
          }
        )
      ]
    }
  );
}
function SurgicalPenHome() {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      sx: {
        width: "100%",
        height: 150,
        flexShrink: 0,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 5,
        background: "linear-gradient(211deg, #FFF 0%, rgba(210, 209, 209, 0.82) 97.73%)",
        overflow: "hidden",
        cursor: "pointer",
        margin: "0 auto"
      },
      onClick: () => router.get(route("pen")),
      children: [
        /* @__PURE__ */ jsx(
          Box,
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            children: /* @__PURE__ */ jsx(Typography, { fontSize: 18, p: 2, align: "center", fontWeight: 600, children: "Surgical Marker Pen & Eraser" })
          }
        ),
        /* @__PURE__ */ jsx(
          Box,
          {
            sx: {
              overflow: "hidden"
            },
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/products/surgicalPen.jpg",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function Home() {
  const sections = [
    // Manikins, Cpr, Skeleton, microscope
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          color: "#ababab",
          fontSize: { xs: 17, sm: 17, md: 22 },
          fontWeight: { xs: 400, sm: 400, md: 600 },
          my: 3,
          align: "center",
          children: "Our Trending Teaching supplies"
        }
      ),
      /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            mt: 5,
            mb: 7,
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: "space-around",
            alignItems: "center",
            px: { xs: 0, sm: 0, md: 7 }
          },
          children: [
            /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Grid, { container: true, columnSpacing: 1.5, children: [
              /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(ManikinHome, {}) }),
              /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsxs(Grid, { container: true, direction: "column", rowSpacing: 2, children: [
                /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(CPRHome, {}) }),
                /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(SkeletonHome, {}) })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsx(Box, { my: 5, children: /* @__PURE__ */ jsx(MicroscopeHome, {}) })
          ]
        }
      )
    ] }),
    //  Practicing model section
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsxs(Container, { maxWidth: "md", children: [
        /* @__PURE__ */ jsx(
          Typography,
          {
            fontSize: 30,
            color: "primary",
            fontWeight: 400,
            align: "center",
            my: 6,
            children: "Practicing Models"
          }
        ),
        /* @__PURE__ */ jsxs(
          Box,
          {
            my: 3,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 5,
            children: [
              /* @__PURE__ */ jsxs(
                Box,
                {
                  my: 3,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  children: [
                    /* @__PURE__ */ jsx(AestheticsHome, {}),
                    /* @__PURE__ */ jsx(ChildDummyHome, {})
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Box,
                {
                  width: "40%",
                  sx: {
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block"
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      Typography,
                      {
                        fontSize: 18,
                        fontWeight: "bold",
                        gutterBottom: true,
                        children: "Practicing models help"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Typography,
                      {
                        fontSize: 14,
                        paragraph: true,
                        sx: { textIndent: 40 },
                        children: [
                          "Welcome to the future of medical education with Practicing Medical Models. Our platform offers a revolutionary and immersive way for medical professionals, students, and enthusiasts to enhance their knowledge and skills.",
                          " "
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Typography,
                      {
                        fontSize: 14,
                        paragraph: true,
                        sx: { textIndent: 40 },
                        children: "At Practicing Medical Models, we believe that the best way to learn and excel in the field of healthcare is through hands-on practice."
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(Box, { my: 5, children: /* @__PURE__ */ jsx(InjectionArm, {}) })
      ] }),
      /* @__PURE__ */ jsx(Container, { maxWidth: "sm", children: /* @__PURE__ */ jsx(
        Box,
        {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            gap: 5,
            justifyContent: "space-around",
            alignItems: "center",
            my: 5
          },
          children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(ButtockHome, {}) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(DeliveryHome, {}) })
          ] }) })
        }
      ) }),
      /* @__PURE__ */ jsx(Container, { maxWidth: "md", children: /* @__PURE__ */ jsxs(
        Box,
        {
          sx: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mt: "72px"
          },
          children: [
            /* @__PURE__ */ jsx(EtTubeHome, {}),
            /* @__PURE__ */ jsxs(Box, { sx: { width: { xs: "70%", sm: "50%", md: "30%" } }, children: [
              /* @__PURE__ */ jsx(Typography, { fontSize: 22, fontWeight: 400, gutterBottom: true, children: "Realistic Simulations" }),
              /* @__PURE__ */ jsx(
                Typography,
                {
                  fontSize: 14,
                  paragraph: true,
                  sx: { textIndent: 25 },
                  children: "Transform your teaching methods with our engaging models."
                }
              ),
              /* @__PURE__ */ jsx(
                Typography,
                {
                  fontSize: 14,
                  paragraph: true,
                  sx: { textIndent: 25 },
                  children: "Perfect your skills and build confidence before stepping into the job."
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Divider, { sx: { margin: "30px auto", width: "50%" } }),
      /* @__PURE__ */ jsx(
        Grid,
        {
          container: true,
          alignItems: "center",
          mb: 8,
          mt: 4,
          spacing: 5,
          justifyContent: "center",
          children: /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 9, children: /* @__PURE__ */ jsxs(
            Grid,
            {
              container: true,
              justifyContent: "space-evenly",
              spacing: 3,
              px: { xs: 0, sm: 0, md: 7 },
              children: [
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 5, children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(BloodCollectionNeedleHome, {}) }) }),
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 12, md: 5, children: /* @__PURE__ */ jsx(Box, { children: /* @__PURE__ */ jsx(SurgicalPenHome, {}) }) })
              ]
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsx(Container, { maxWidth: "xs", children: /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 3, children: [
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(SutureKitHome, {}) }),
        /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(DressingBoxHome, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx(
        Typography,
        {
          fontSize: 22,
          color: "orange",
          fontWeight: 600,
          align: "center",
          my: 4,
          children: "Demostration Models"
        }
      ),
      /* @__PURE__ */ jsxs(Container, { maxWidth: "md", children: [
        /* @__PURE__ */ jsxs(
          Box,
          {
            sx: {
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Box, { width: 330, children: /* @__PURE__ */ jsxs(Grid, { container: true, columnSpacing: 1.5, children: [
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(AnatomyHome, {}) }),
                /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsxs(
                  Grid,
                  {
                    container: true,
                    direction: "column",
                    rowSpacing: 2,
                    children: [
                      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(HeartHome, {}) }),
                      /* @__PURE__ */ jsx(Grid, { item: true, children: /* @__PURE__ */ jsx(OvaryHome, {}) })
                    ]
                  }
                ) })
              ] }) }),
              /* @__PURE__ */ jsx(Box, { width: 330, children: /* @__PURE__ */ jsx(Box, { my: 7, children: /* @__PURE__ */ jsx(PosterHome, {}) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Container, { maxWidth: "xs", children: [
          /* @__PURE__ */ jsxs(Grid, { container: true, my: 7, spacing: 1, children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 4, children: /* @__PURE__ */ jsx(SkullHome, {}) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 4, children: /* @__PURE__ */ jsx(SkinHome, {}) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 4, children: /* @__PURE__ */ jsx(PregnancyHome, {}) })
          ] }),
          /* @__PURE__ */ jsxs(Grid, { container: true, spacing: 2, mb: 7, children: [
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(CervicalHome, {}) }),
            /* @__PURE__ */ jsx(Grid, { item: true, xs: 6, children: /* @__PURE__ */ jsx(BreastHome, {}) })
          ] })
        ] })
      ] })
    ] })
  ];
  const shuffledSections = shuffleArray(sections);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return /* @__PURE__ */ jsxs(UserLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Home" }),
    shuffledSections.map((section, index) => /* @__PURE__ */ jsx(React__default.Fragment, { children: section }, index)),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Home as default
};
