// resources/js/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ba7636",
        },
        secondary: {
            main: "#efefef",
        },
    },
    typography: {
        fontFamily: "Inter",
    },
    // Set the default background color
    backgroundColor: {
        default: "#ddd", // Change to your desired color
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f4f4f4",
                    borderRadius: "30px",
                    border: "none",
                    "& fieldset": { border: "none" },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none", // Reset text to original case
                    borderRadius: 20,
                },
            },
        },
    },
});

export default theme;
