import React from "react";
import { Spring } from "react-spring/renderprops";

export default function Composant2() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c2style}>
            <h1> composant 2</h1>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c2style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};
