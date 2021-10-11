import React, {useContext} from 'react';

// Css
import './ListRecipes.css';

// Components
import Recipe from "./Recipe";
import Spinner from "./Spinner";

// Context
import {RecipesContext} from "../context/RecipesContext";

const ListRecipes = () => {

    const { recipes, loading } = useContext(RecipesContext);

    return(
        <div className="row mt-5">
            {
                loading ? (<Spinner/>) :  (
                    recipes.map(recipe => (
                        <Recipe key={recipe.idDrink} recipe={recipe}/>
                    ))
                )
            }
        </div>
    );
}

export default ListRecipes;