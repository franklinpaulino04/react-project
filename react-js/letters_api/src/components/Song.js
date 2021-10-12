import React, {Fragment} from 'react';
import './Song.css';
import PropTypes from 'prop-types';

const Song = ({ letter }) => {

    if(letter === null || letter === '') return null;

    return(
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letter}</p>
        </Fragment>
    )
}

Song.propTypes = {
    letter: PropTypes.string.isRequired,
}

export default Song;