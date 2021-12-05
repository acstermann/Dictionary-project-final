import React from "react";

export default function Example(props) {
  console.log(props);
  if (props.example === "undefined") {
    return null;
  } else {
    return (
      <div className="example">
        <strong>Example:</strong>
        {props.example.map(function (example, index) {
          return <div key={index}>{example}</div>;
        })}
      </div>
    );
  }
}
