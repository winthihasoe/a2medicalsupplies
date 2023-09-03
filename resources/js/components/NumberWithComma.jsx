import React from "react";

export default function NumberWithComma({ value }) {
    // Use toLocaleString() to format the number with commas
    const formattedValue = value.toLocaleString();
    // const addCommas = (num) =>
    //     num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return <span>{formattedValue}</span>;
}
