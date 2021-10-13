import React from 'react';

type Props = {
    msg: string;
}

const Error: React.FC<Props> = ({msg}) => {

    return (<p className="red darken-4 error">{msg}</p>);
}

export default Error;