import { useState } from "react";
import React, { useRef } from "react";
import Options from "./Options.js";

function Time(props) {
  const [startval, setstartval] = useState(9);
  const [stopval, setstopval] = useState(9);
  console.log("start: " + startval);
  console.log("stop: " + stopval);
  function setTime() {
    props.onChange(stopval - startval);
  }

  return (
    <div className="d-flex">
      <div className="start">
        <select id="starttime" onChange={(e) => setstartval(e.target.value)}>
          {Options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="stop">
        <select id="stoptime" onChange={(e) => setstopval(e.target.value)}>
          {Options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="btn">
        <button type="button" onClick={setTime}>
          +
        </button>
      </div>
    </div>
  );
}
export default Time;
