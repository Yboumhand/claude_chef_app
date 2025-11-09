import React from "react";

export default function Pad(props) {
  // the issue was behind that i was trying to modify a prop directly, which is not allowed in React.

  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : undefined}
      onClick={props.toggle}
    ></button>
  );
}
