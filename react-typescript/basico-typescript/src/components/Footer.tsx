import React from 'react';

type Props = {
    date: string;
}

const Footer: React.FC<Props> = ({ date }) => {

    return (
        <p>Todos los derechos reservados &copy; {date} </p>
    );
}

export default Footer;