import React from "react";
import Parent from "./Props/Parent";
import Section1 from "./UI Project/Section1/Section1";
import Section2 from "./UI Project/Section2/Section2";
import "remixicon/fonts/remixicon.css";

export default function App() {
  return (
    <div>
      <Section1/>
      <Section2/>
      {/* <Parent /> */}
    </div>
  );
}
