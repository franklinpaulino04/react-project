import React, {createContext, useEffect, useState} from 'react';
import './CategoriesContext.css';

// Crear el Context
export const CategoriesContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriesProvider = ( props ) => {

    const [categories, setCategories] = useState([]);

    const consultApi = async () => {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
            .then((response) => response.json())
            .then((response) => {
                setCategories(response.drinks);
            })
            .catch((error) => console.log(`Error category: ${error}`));
    }

    useEffect( () => {
         consultApi();
    },[]);

    return(
        <CategoriesContext.Provider value={{ categories }}>
            { props.children }
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;

