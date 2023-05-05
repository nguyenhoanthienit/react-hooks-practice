import React, { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const COLORS = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "black",
    "grey",
    "orange",
    "violet",
    "olive",
    "cream",
    "teal",
    "coral",
    "lavender",
    "rust",
    "mauve",
    "silver",
    "charcoal",
    "cyan",
    "aqua",
  ];
  const currentIdx = COLORS.indexOf(currentColor);
  let newIdx = currentIdx;
  while (currentIdx === newIdx) {
    newIdx = Math.trunc(Math.random() * COLORS.length);
  }
  console.log(COLORS[newIdx]);
  return COLORS[newIdx];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");

  // to not get a color as same as prev color
  const colorRef = useRef("transparent");

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return color;
}

export default useMagicColor;
