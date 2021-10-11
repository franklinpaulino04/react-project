import React from 'react';

// Css
import './App.css';

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import ListRecipes from "./components/ListRecipes";

// Context
import CategoriesProvider from "./context/CategoriesContext";
import RecipesProvider from "./context/RecipesContext";
import ModalProvider from "./context/ModalContext";


function App() {
  return (
    <CategoriesProvider>
        <RecipesProvider>
            <ModalProvider>

                <Header/>
                <div className="container mt-5">
                    <div className="row">
                        <Form/>
                    </div>
                    <ListRecipes/>
                </div>

            </ModalProvider>
        </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
