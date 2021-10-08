import React from 'react';

import PropTypes from 'prop-types';

const Notice = ({ article }) => {

    const { urlToImage, url, title, description, source } = article;

    return(
        <div className="col s12 m6 l4">
            <div className="card">
                { urlToImage ? (
                    <div className="card-image">
                        <img src={urlToImage} alt={title} />
                        <span className="card-title">{source.name}</span>
                    </div> ) : null
                }

                <div className="card-content">
                    <a href={url} target="_blank" rel="noopener noreferrer"><strong>{title}</strong></a>
                    <br/><br/>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    );
}

Notice.propTypes = {
    article: PropTypes.object.isRequired
}

export default Notice;