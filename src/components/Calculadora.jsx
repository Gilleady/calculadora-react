import React, { useState } from 'react';

function Calculadora() {
  // 1. Var, let e const
  const [displayValue, setDisplayValue] = useState("");
  const operators = ["+", "-", "*", "/"];
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  // 2. Objetos 
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0) ? "Erro: Divisão por zero!" : a / b
  };

  // 3. Arrow Function
  const appendNumber = (number) => {
    setDisplayValue(prevValue => prevValue + number);
  };

  // 4. Arrow Function
  const appendOperator = (op) => {
    if (operator !== null) {
      calculate();
    }
    setFirstOperand(parseFloat(displayValue));
    setOperator(op);
    setDisplayValue("");
  };

  // 5. Arrow Function
  const calculate = () => {
    const secondOperand = parseFloat(displayValue);
    let result;

    if (operators.includes(operator)) { 
      result = operations[operator](firstOperand, secondOperand);
    } else {
      result = "Erro: Operador inválido!";
    }

    setDisplayValue(result.toString());
    setFirstOperand(null);
    setOperator(null);
  };

  // 6. Arrow Function
  const clearDisplay = () => {
    setDisplayValue("");
    setFirstOperand(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <h1>Calculadora Simples</h1>
      <div className="display">
        <input type="text" id="display" value={displayValue} readOnly />
      </div>
      <div className="buttons">
        <button onClick={() => appendNumber('7')}>7</button>
        <button onClick={() => appendNumber('8')}>8</button>
        <button onClick={() => appendNumber('9')}>9</button>
        <button onClick={() => appendOperator('+')}>+</button>

        <button onClick={() => appendNumber('4')}>4</button>
        <button onClick={() => appendNumber('5')}>5</button>
        <button onClick={() => appendNumber('6')}>6</button>
        <button onClick={() => appendOperator('-')}>-</button>

        <button onClick={() => appendNumber('1')}>1</button>
        <button onClick={() => appendNumber('2')}>2</button>
        <button onClick={() => appendNumber('3')}>3</button>
        <button onClick={() => appendOperator('*')}>*</button>

        <button onClick={() => appendNumber('.')}>.</button>
        <button onClick={() => appendNumber('0')}>0</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => appendOperator('/')}>/</button>

        <button onClick={() => clearDisplay()} className="clear">C</button>
      </div>
    </div>
  );
}

export default Calculadora;