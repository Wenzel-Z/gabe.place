import React from 'react';
import { Stage, Layer, Rect } from 'react-konva';

const Canvas = () => {
  // This is placeholder data. Eventually, you'll fetch this from your backend.
  const gridData = Array(50).fill().map(() => Array(50).fill('white'));

  const handleCellClick = (color, i, j) => {
    // This is where you'll handle the color change. You will need to implement this.
    console.log(`Cell at ${i}, ${j} clicked`);
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {gridData.map((row, i) => (
          row.map((color, j) => (
            <Rect
              key={`${i}-${j}`}
              x={i * 10} y={j * 10}
              width={10} height={10}
              fill={color}
              onClick={() => handleCellClick(color, i, j)}
            />
          ))
        ))}
      </Layer>
    </Stage>
  );
};

export default Canvas;