import { useState, useEffect } from "react";

export default function Micomponente() {
  const colors = ['yellow', 'blue', 'red'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const currentColor = colors[currentColorIndex];

  function changeColor() {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  }
  
  useEffect(() => {
    localStorage.setItem("color", currentColor);
  }, [currentColor]);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={containerStyle}>
      <button onClick={changeColor}>Change Color</button>
      <div style={{ backgroundColor: currentColor, width: "100px", height: "100px" }} />
    </div>
  );
}



