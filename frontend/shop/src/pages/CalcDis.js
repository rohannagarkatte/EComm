import React from "react";
import Inp from "../Components/Inp";

export default function CalcDis() {
  return (
    <div style={{ backgroundColor: "darkcyan" }}>
      <h3 style={{ margin: 10 }}>
        Enter the following values to find the Discount Percent
      </h3>
      <Inp />
    </div>
  );
}
