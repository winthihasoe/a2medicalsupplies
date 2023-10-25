import { jsx } from "react/jsx-runtime";
import ReactQuill from "react-quill";
import "react-color";
import "react";
const quill_snow = "";
function ProductDescriptionEditor({ initialValue, handleChangeDescription }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ color: [] }, { background: [] }],
      // Add text and background color options
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ]
    ]
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
    "color"
  ];
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    ReactQuill,
    {
      value: initialValue,
      onChange: handleChangeDescription,
      theme: "snow",
      modules,
      formats,
      bounds: ".app-container",
      placeholder: "Write something..."
    }
  ) });
}
export {
  ProductDescriptionEditor as P
};
