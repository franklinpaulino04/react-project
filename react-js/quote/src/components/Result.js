import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';

const Result = ({ quote }) => {

    return(
        (quote === 0)? <p className="message"> Elige marca, año y tipo de seguro </p>
            :
            (
                <div className="result-quote">
                    <p className="text-quote">El total es: ${ quote } </p>
                </div>
            )
    );
}

Result.propTypes = {
    quote: PropTypes.number.isRequired,
}

export default Result;