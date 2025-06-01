import React from "react";
import { createRoot } from "react-dom/client";

const fName = "Zakir";
const lName = "Rashid";
const num = 7;

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1>My name is {fName + " " + lName}</h1>
    <p>My lucky number is {num + 2}</p>
  </div>
);
