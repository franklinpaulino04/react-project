import React, {createContext, useEffect, useState} from 'react';

//Css
import './ModalContext.css';

// create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idrecipe, setIdRecipe] = useState(null);
    const [ information, setInformation] = useState({});

    const consultApi = async () => {
        if(idrecipe === null) return;
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`)
            .then((response) => response.json())
            .then((response) => {
                setInformation(response.drinks[0]);
            })
            .catch((error) => console.log(`ModalProvider Error : ${error}`));
    }

    useEffect(() => {
        consultApi();
    },[idrecipe]);

    return(
        <ModalContext.Provider value={{
            setIdRecipe,
            information,
            setInformation,
        }}>
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;