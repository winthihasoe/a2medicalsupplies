import { jsx } from "react/jsx-runtime";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles/index.js";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#ba7636"
    },
    secondary: {
      main: "#efefef"
    }
  },
  typography: {
    fontFamily: "Inter"
  },
  // Set the default background color
  backgroundColor: {
    default: "#ddd"
    // Change to your desired color
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4f4f4",
          borderRadius: "30px",
          border: "none",
          "& fieldset": { border: "none" }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          // Reset text to original case
          borderRadius: 20
        }
      }
    }
  }
});
const appName = "A2";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AddProduct.jsx": () => import("./assets/AddProduct-4da42896.js"), "./Pages/Admin/AdminOrders.jsx": () => import("./assets/AdminOrders-27827d31.js"), "./Pages/Admin/AdminProducts.jsx": () => import("./assets/AdminProducts-d50cd6b8.js"), "./Pages/Admin/AdminSingleOrder.jsx": () => import("./assets/AdminSingleOrder-36e23f94.js"), "./Pages/Admin/AdminSingleProduct.jsx": () => import("./assets/AdminSingleProduct-a5151a53.js"), "./Pages/Admin/CreateCategory.jsx": () => import("./assets/CreateCategory-cc9c79f4.js"), "./Pages/Admin/Dashboard.jsx": () => import("./assets/Dashboard-a615fa5d.js"), "./Pages/Admin/Drugs/AdminDrugIndex.jsx": () => import("./assets/AdminDrugIndex-a5a5bcab.js"), "./Pages/Admin/Drugs/AdminEditDrug.jsx": () => import("./assets/AdminEditDrug-c18c5d95.js"), "./Pages/Admin/Drugs/AdminSingleDrug.jsx": () => import("./assets/AdminSingleDrug-02b6788b.js"), "./Pages/Admin/UserDetail.jsx": () => import("./assets/UserDetail-a0673be0.js"), "./Pages/Admin/Users.jsx": () => import("./assets/Users-6935bce9.js"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-aae3c73d.js"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-6d59b681.js"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-f44f5da5.js"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-f4fff74e.js"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-dd99c246.js"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-e19ba10f.js"), "./Pages/Drugs.jsx": () => import("./assets/Drugs-df8313a6.js"), "./Pages/Home.jsx": () => import("./assets/Home-c440bb63.js"), "./Pages/ProductList.jsx": () => import("./assets/ProductList-5bbd9823.js"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-ad5f6e7e.js"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-e1c40045.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-f9387598.js"), "./Pages/SearchResult.jsx": () => import("./assets/SearchResult-c05ee7f8.js"), "./Pages/SingleProduct.jsx": () => import("./assets/SingleProduct-0cdbf787.js"), "./Pages/User/Account.jsx": () => import("./assets/Account-bc2e23e6.js"), "./Pages/User/Address.jsx": () => import("./assets/Address-7df765d3.js"), "./Pages/User/Cart.jsx": () => import("./assets/Cart-c63c24c8.js"), "./Pages/User/Checkout.jsx": () => import("./assets/Checkout-4296c428.js"), "./Pages/User/MyOrders.jsx": () => import("./assets/MyOrders-51fecf25.js"), "./Pages/User/Profile.jsx": () => import("./assets/Profile-859c3479.js"), "./Pages/User/SingleOrder.jsx": () => import("./assets/SingleOrder-d672f98c.js"), "./Pages/User/SuccessOrder.jsx": () => import("./assets/SuccessOrder-ac85bc63.js"), "./Pages/Welcome.jsx": () => import("./assets/Welcome-00f4109e.js") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsx(App, { ...props }) })
    );
  },
  progress: {
    color: "#4B5563"
  }
});
