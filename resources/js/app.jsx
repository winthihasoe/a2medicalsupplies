import React from "react";
import { createRoot } from "react-dom/client"; //here
import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

createInertiaApp({
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        createRoot(el).render(
            <ThemeProvider theme={theme}>
                <App {...props} />
            </ThemeProvider>
        );
    },
});
