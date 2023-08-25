import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import ProductDescriptionEditor from "../components/ProductDescriptionEditor";

export default function Drug() {
    const { data, setData, post } = useForm({
        description: "",
    });
    const handleDescriptionChange = (newDescription) => {
        setData({ description: newDescription });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/drugs", data);
        setData({
            description: "",
        });
    };
    return (
        <div>
            Drug
            <div>
                <ProductDescriptionEditor
                    value={data.description}
                    onChange={handleDescriptionChange}
                />
            </div>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleSubmit}
            >
                Save
            </Button>
        </div>
    );
}
