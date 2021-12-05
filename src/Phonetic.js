import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };

  return (
    <div className="Phonetic">
      <button onClick={start}>🔊</button>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
