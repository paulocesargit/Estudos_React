import React, { useState, useEffect } from "react";
import "./style.css";

function Scripts() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.className = isLightMode ? "light" : "";
  }, [isLightMode]);

  const toggleMode = () => {
    setIsLightMode((prev) => !prev);
  };

  return (
    <div>
      <div id="switch" onClick={toggleMode}>
        <button></button>
        <span></span>
      </div>
    </div>
  );
}

export default Scripts;
