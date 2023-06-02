import React, { useEffect, useState } from 'react';
import './HelloWorld.scss'

function HelloWorld(props) {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `${count} times`;
    });

    return (
        <div className='hello'>
            {count}
            <div>
                <button onClick={increaseCount}>Increase</button>
            </div>
        </div>
    );
}

export default HelloWorld;

