import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <br />
              <p>
                Example: {""}
                <em>{definition.example}</em>
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
