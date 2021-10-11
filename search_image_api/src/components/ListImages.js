import React from 'react';
import './ListImages.css';

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

export default ListImages;