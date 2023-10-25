import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { useForm } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import { P as ProductDescriptionEditor } from "./ProductDescriptionEditor-cc9b1cd9.js";
import "react-quill";
import "react-color";
function Drug() {
  const { data, setData, post } = useForm({
    description: ""
  });
  const handleDescriptionChange = (newDescription) => {
    setData({ description: newDescription });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    post("/drugs", data);
    setData({
      description: ""
    });
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    "Drug",
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
      ProductDescriptionEditor,
      {
        value: data.description,
        onChange: handleDescriptionChange
      }
    ) }),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "contained",
        color: "secondary",
        size: "small",
        onClick: handleSubmit,
        children: "Save"
      }
    )
  ] });
}
export {
  Drug as default
};
