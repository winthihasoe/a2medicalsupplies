import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { ChromePicker } from "react-color"; // Import the color picker
import { useEffect, useState } from "react";

function ProductDescriptionEditor({ value, onChange }) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            [{ color: [] }, { background: [] }], // Add text and background color options
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "color",
    ];

    return (
        <div>
            <ReactQuill
                value={value}
                onChange={onChange}
                theme="snow"
                modules={modules}
                formats={formats}
                bounds=".app-container"
                placeholder="Write something..."
            />
        </div>
    );
}

export default ProductDescriptionEditor;
