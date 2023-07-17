// src/components/Calculator.js
import React, { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import "../styles/Calculator.css";
import * as math from "mathjs";

function Calculator() {
  const [display, setDisplay] = useState("");

  const addToDisplay = (val) => {
    setDisplay(display + val);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const delLast = () => {
    setDisplay(display.slice(0, -1));
  };

  const calculateDisplay = () => {
    try {
      setDisplay(math.evaluate(display));
    } catch (error) {
      console.log("Error", error);
      setDisplay("Error");
    }
  };

  console.log("my Array is", [...Array(9)]);

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {[...Array(9)].map((_, i) => (
          <CalculatorButton key={i} onClick={() => addToDisplay(i + 1)}>
            {i + 1}
          </CalculatorButton>
        ))}
        <CalculatorButton onClick={() => addToDisplay(0)}>0</CalculatorButton>
        <CalculatorButton onClick={() => addToDisplay("+")}>+</CalculatorButton>
        <CalculatorButton onClick={() => addToDisplay("-")}>-</CalculatorButton>
        <CalculatorButton onClick={() => addToDisplay("*")}>*</CalculatorButton>
        <CalculatorButton onClick={() => addToDisplay("/")}>/</CalculatorButton>
        <CalculatorButton onClick={() => addToDisplay("%")}>%</CalculatorButton>

        <CalculatorButton onClick={() => addToDisplay("(")}>(</CalculatorButton>
        <CalculatorButton onClick={() => addToDisplay(")")}>)</CalculatorButton>
        <CalculatorButton onClick={clearDisplay}>AC</CalculatorButton>
        <CalculatorButton onClick={calculateDisplay}>=</CalculatorButton>
        <CalculatorButton onClick={delLast}>D</CalculatorButton>
      </div>
    </div>
  );
}

export default Calculator;
