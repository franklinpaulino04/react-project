import React, {useContext, useState} from 'react';

// Css
import './Form.css';

// Context
import {CategoriesContext} from "../context/CategoriesContext";
import {RecipesContext} from "../context/RecipesContext";

const Form = () => {

    const [search , setSearch ] = useState({
        name:'',
        category:'',
    });

    const { categories } = useContext(CategoriesContext);
    const { setSearchRecipes, setConsult } = useContext(RecipesContext);

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchRecipes(search);
        setConsult(true);
    }

    return(
        <form className="col-12" onSubmit={ handleSubmit}>
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                    onChange={handleChange}/>
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="category" onChange={handleChange}>
                        <option value="">-- Selecciona Categoría --</option>
                        {categories.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{ category.strCategory }</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" className="btn btn-block btn-primary" value="Buscar Bebidas"/>
                </div>
            </div>
        </form>
    );
}

export default Form;