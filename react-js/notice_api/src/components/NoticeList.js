import React from 'react';
import PropTypes from 'prop-types';

// components
import Notice from "./Notice";

const NoticeList = ({ articles }) => {

    return(
        <div className="row">
            {
                articles.map(n => (
                    <Notice key={n.publishedAt} article={n}/>
                ))
            }
        </div>
    );
}

NoticeList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default NoticeList;