import React from 'react';
import useClock from '../../hooks/useClock';

function Clock() {
    const {timeString} = useClock();

    return (
        <div>
            <div>
                {timeString}
            </div>
        </div>
    )
}

export default Clock;
