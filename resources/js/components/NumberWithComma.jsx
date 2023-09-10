import React from "react";

export default function NumberWithComma({ value }) {
    const formattedValue = value.toLocaleString();

    return <span>{formattedValue}</span>;
}
