import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name: PropTypes.string
};

Hero.defaultProps = {
    name: ''
};

function Hero(props) {
    const { name } = props;
    console.log(name);

    return (
        <div>
            Name: {name}
        </div>
    );
}

// ==> no re render React.memo
export default React.memo(Hero);