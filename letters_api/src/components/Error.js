import React from 'react';
import './Error.css';
import PropTypes from 'prop-types';

const Error = ({ msg }) => {
    return (
        <p className="alert alert-danger text-center p-2">{ msg }</p>
    );
}

Error.propTypes = {
    msg: PropTypes.string.isRequired,
}

export default Error;