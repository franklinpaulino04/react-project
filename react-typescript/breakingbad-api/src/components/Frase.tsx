import React from 'react';

// Css
import './Frase.css';

//Interface
import {IFrase} from "../Interface/IFrase";

type Props = {
    frase: IFrase
}

const Frase:React.FC<Props> = ({ frase }) => {

    const { quote, author } = frase;

    return (
        <div className="frase">
            <h1>{quote}</h1>
            <p>{author}</p>
        </div>
    );
}

export default Frase;