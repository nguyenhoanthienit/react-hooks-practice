import React from 'react';
import './index.scss'
import useClock from '../../hooks/useClock';


function BeautifulClock() {
    const { timeString } = useClock();

    return (
        <p className='beautiful-clock'>
            {timeString}
        </p>
    );
}

export default BeautifulClock;