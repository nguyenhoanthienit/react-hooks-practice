import React from 'react';
import { useState } from 'react';
import './ColorBox.scss'

function getRandomColor(){
    const COLORS = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'grey', 'orange', 'violet', 'olive', 'cream', 'teal', 'coral', 'lavender', 'rust', 'mauve', 'silver', 'charcoal', 'cyan'];
    const randomIdx = Math.trunc(Math.random() * COLORS.length);
    return COLORS[randomIdx];
}

function ColorBox() {
    const initColor = localStorage.getItem('box_color') || 'pink';
    console.log(initColor);
    const [color, setColor] = useState(initColor) // -> render 2 times if use React.StrictMode
    // -> solve issue by using callback:
    // const [color, setColor] = useState(() => {
    //     const initColor = localStorage.getItem('box_color') || 'pink';
    //     console.log(initColor);
    //     return initColor;
    // })
    
    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }
    
    return (
        <div className='color-box' style={{backgroundColor: color}} onClick={handleBoxClick}>
        </div>
    );
}

export default ColorBox;