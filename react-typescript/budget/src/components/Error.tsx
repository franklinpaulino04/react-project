import React from 'react';

type Props = {
    msg: string,
}

const Error:React.FC<Props> = ({msg}) => {
    return (
        <p className="alert alert-danger error">{msg}</p>
    );
}

export default Error;