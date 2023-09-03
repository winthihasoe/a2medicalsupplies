import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { ChromePicker } from "react-color"; // Import the color picker
import { useEffect, useState } from "react";

function ProductDescriptionEditor({ initialValue, handleChangeDescription }) {
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
        "background",
        "color",
    ];

    return (
        <div>
            <ReactQuill
                value={initialValue}
                onChange={handleChangeDescription}
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
