import { Link } from "@inertiajs/react";
import { Box } from "@mui/material";

export default function ApplicationLogo(props) {
    return (
        <Box>
            <Link className="inertia-link" href={route("home")}>
                <img src="/images/logo.jpg" width={80} />
            </Link>
        </Box>
    );
}
