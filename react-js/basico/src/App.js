import React, {Fragment, useState} from 'react';

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Product from "./components/Product";

function App() {

    //created list product
    const [products, setProducts] = useState([
        { id: 1, name: 'Camisa ReactJS', price: 50.00 },
        { id: 2, name: 'Camisa VueJS', price: 40.00 },
        { id: 3, name: 'Camisa Node.js', price: 30.00 },
        { id: 4, name: 'Camisa Angular', price: 20.00 },
    ]);

    //state asigne card purcharse.
    const [cards, setCards] = useState([]);

    const date = new Date().getFullYear();

  return (
      <Fragment>

          <Header title='Tienda Virtual'/>

          <h1>Lista de Producto</h1>
          {
              products.map((product) => (
                  <Product
                  key = {product.id}
                  products = {products}
                  product = {product}
                  cards={cards}
                  setCards = {setCards}
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

