import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useForm } from "@inertiajs/inertia-react";
import { router, usePage } from "@inertiajs/react";

export default function SearchBar() {
    const categories = usePage().props.categories;
    const random = Math.floor(Math.random() * categories[0].length);

    const { data, setData, errors } = useForm({
        keywords: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const keyPress = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            router.get(route("searchEverything"), data);
        }
    };
    return (
        <Box sx={{ my: 2, width: 350, margin: "0 auto" }}>
            <TextField
                fullWidth
                placeholder={categories[0][random].category_name + " ..."}
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon />
                        </InputAdornment>
                    ),
                }}
                onChange={handleChange}
                onKeyDown={keyPress}
                value={data.keywords}
                name="keywords"
                sx={{ border: "1px solid #ababab" }}
            />
        </Box>
    );
}
