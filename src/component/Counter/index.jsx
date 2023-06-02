import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {

};

function Counter(props) {
    const [count, setCount] = useState(0);
    const prevCount = useRef(count)

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleIncreaseClick = () => {
        setCount(x => x + 1);
    }

    return (
        <div>
            <p>Prev {prevCount.current}</p>
            <p>Current {count}</p>
            <button onClick={handleIncreaseClick}>Increase</button>
        </div>
    );
}

export default Counter;