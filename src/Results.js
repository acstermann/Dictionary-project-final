import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="result">
          <h6> Your selected word is:</h6>
          <h2>{props.results.word}</h2>
        </div>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
