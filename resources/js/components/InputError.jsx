import { Typography } from "@mui/material";

export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <Typography fontSize={12} {...props} color="error">
            {message}
        </Typography>
    ) : null;
}
