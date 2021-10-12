import React from 'react';

type Props = {
    title: string;
}

const Header:React.FC<Props> = ({title}) => {
    return (
        <h1 className="encabezado">{title}</h1>
    );
}

export default Header;