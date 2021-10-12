import React, {Fragment, useState} from 'react';
import './App.css';

// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";
import Card from "./components/Card";

// Interface
import {IProduct} from "./interfaces/IProduct";

const App = () => {

    // created list product
    const [products, setProducts] = useState<IProduct[]>([
        { id: 1, name: 'Camisa ReactJS', price: 50.00 },
        { id: 2, name: 'Camisa VueJS', price: 40.00 },
        { id: 3, name: 'Camisa Node.js', price: 30.00 },
        { id: 4, name: 'Camisa Angular', price: 20.00 },
    ]);

    // state asigne card purcharse.
    const [cards, setCards] = useState<IProduct[]>([]);

    const date: string = new Date().getFullYear().toString();

    return (
      <Fragment>

        <Header title='Tienda Virtual'/>

        <h1>Lista de Producto</h1>
        {
          products.map((product: IProduct) => (
              <Product
                  key = {product.id}
                  products = {products}
                  product = {product}
                  cards={cards}
                  setCards = {setCards}
                  type = {1}
              />
          ))
        }

        <Card
            cards = {cards}
            setCards = {setCards}
        />

        <Footer
            date={date}
        />
      </Fragment>
  );
}

export default App;
