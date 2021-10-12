import React from 'react';
import './ListImages.css';
import PropTypes from 'prop-types';

// Components
import Image from "./Image";

const ListImages = ({ images }) => {
    return( <div className="col-12 p-5 row">
        {images.map(row => (
            <Image
                key={row.id}
                image={row}
            />
        ))}
    </div>);
}

ListImages.propTypes = {
    image: PropTypes.object.isRequired,
}

export default ListImages;