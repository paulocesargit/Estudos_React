import React, { useState } from "react";
import "./Style.css";

function Contador() {
  const [count, setCount] = useState(0);

  const adicionar = () => setCount(count + 1);
  const tirar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="Contador">
      <h1>{count}</h1>
      <button onClick={adicionar}>+1</button>
      <button onClick={tirar}>-1</button>
    </div>
  );
}

export default Contador;
