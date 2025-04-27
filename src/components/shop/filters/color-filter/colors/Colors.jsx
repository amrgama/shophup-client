import React, { useState } from 'react'
import InputColor from './InputColor';
const colors = [
    {
        value: "green",
        countity: 3
    },
    {
        value: "yellow",
        countity: 5
    },
    {
        value: "white",
        countity: 2
    },
    {
        value: "red",
        countity: 9
    },
    {
        value: "black",
        countity: 11
    },
];

const Colors = () => {
    const [selectedColor, setSelectedColor] = useState("");

    const renderedColorsInputs = colors.map((color, i)=>{
        return <InputColor key={i} color={color} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    });

  return (
    <div className='text-start'>
        <span className="label d-block fw-500 text-dark mb-2">Colors</span>
        <div className="d-flex flex-wrap justify-content-center gap-2 text-center">
            {renderedColorsInputs}
        </div>
    </div>
  )
}

export default Colors