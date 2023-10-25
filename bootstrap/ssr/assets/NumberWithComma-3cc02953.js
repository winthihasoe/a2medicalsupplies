import { jsx } from "react/jsx-runtime";
import "react";
function NumberWithComma({ value }) {
  const formattedValue = value.toLocaleString();
  return /* @__PURE__ */ jsx("span", { children: formattedValue });
}
export {
  NumberWithComma as N
};
