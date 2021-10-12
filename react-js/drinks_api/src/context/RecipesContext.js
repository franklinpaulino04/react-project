import React, {createContext, useEffect, useState} from 'react';

//Css
import './RecipesContext.css';

// create context
export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);
    const [searchRecipes, setSearchRecipes] = useState({
        name: '',
        category: '',
    });
    const [consult, setConsult] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, category } = searchRecipes;

    const returnRecipes = async () => {
        setLoading(true);
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`)
            .then((response) => response.json())
            .then((response) => {
                setRecipes(response.drinks);
                setLoading(false);
            })
            .catch((error) => console.log(`Error returnRecipes: ${error}`));
    }

    useEffect(() => {
        if(consult){
            returnRecipes();
        }
    },[searchRecipes]);

    return(
        <RecipesContext.Provider value={{
            setSearchRecipes,
            recipes,
            setConsult,
            loading,
        }}>
            { props.children }
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;