import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <p>
                <strong>Definition:</strong> {""}
                {definition.definition}
              </p>
              <p>
                <strong className="example">Example:</strong> {""}
                <em className="example">{definition.example}</em>
              </p>
              <p>
                <Synonyms synonyms={definition.synonyms} />
              </p>
            </p>
          </div>
        );
      })}
    </div>
  );
}
