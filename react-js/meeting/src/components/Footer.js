import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({date}) => {
    return (
        <p className="footer">Todos los derechos reservados fp &copy; {date} </p>
    );
}

Footer.propTypes = {
    date : PropTypes.string.isRequired,
}

export default Footer;