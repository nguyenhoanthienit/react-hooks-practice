import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';
import './index.scss'

BeautifulClock.propTypes = {

};

function BeautifulClock() {
    const { timeString } = useClock();

    return (
        <p className='beautiful-clock'>
            {timeString}
        </p>
    );
}

export default BeautifulClock;