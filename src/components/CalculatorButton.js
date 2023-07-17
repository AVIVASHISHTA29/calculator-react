// src/components/CalculatorButton.js
import React from "react";
import "../styles/CalculatorButton.css";

function CalculatorButton({ children, onClick }) {
  return (
    <button className="calculator-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default CalculatorButton;
