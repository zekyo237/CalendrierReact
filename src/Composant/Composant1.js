import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Composant1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1000, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1style}>
            <h1> composant 1</h1>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};
