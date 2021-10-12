import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';

// Css
import './Recipe.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

// Context
import {ModalContext} from "../context/ModalContext";

function getModalStyle() {
    const top = 50 ;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    scroll: { maxHeight: '720px', overflowY: 'scroll', overflowX: 'none' },
}));

const Recipe = ({ recipe }) => {

    // Configuración del modal de material-ui
    const [ modalStyle ]  = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const { setIdRecipe, information, setInformation} = useContext(ModalContext);

    // Muestra y formatea los ingredientes
    const showIngredients = information => {

        let ingredients = [];

        for(let i = 1; i < 16; i++){

            if( information[`strIngredient${i}`] ) {

                ingredients.push(<li> { information[`strIngredient${i}`] }  { information[`strMeasure${i}`] }</li>)
            }

        }

        return ingredients;
    }

    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{ recipe.strDrink }</h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`}/>
                <div className="card-body">
                    <button type="button" className="btn btn-block btn-primary" onClick={() => {
                        setIdRecipe(recipe.idDrink);
                        handleOpen();
                    }}> Ver Receta</button>

                    <Modal open={open} onClose={() => {
                        setIdRecipe(null);
                        setInformation({})
                        handleClose();
                    }}>

                        <div style={modalStyle} className={classes.paper + ` ` + classes.scroll}>
                            <h2>{information.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>{information.strInstructions}</p>

                            <img className="img-fluid my-4" src={information.strDrinkThumb}  alt={`Imagen de ${information.strDrink}`}/>

                            <h3>Ingredientes y cantidades</h3>
                            <ul>{ showIngredients(information) }</ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
}

export default Recipe;