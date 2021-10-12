import React, {Fragment, useEffect, useState} from 'react';
import './App.css';

// Components
import Header from "./components/Header";
import Form from "./components/Form";
import NoticeList from "./components/NoticeList";

function App() {

    const [category, setCategory] = useState('');
    const [articles, setArticles] = useState([]);

    const consultApi = async () => {
        if(category.trim() === '') return;
        await fetch(`https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=b71475b275e14fd09839495febb00703`)
            .then((response) => response.json())
            .then((response) => {
                if(response.status === 'ok'){
                    console.log(response);
                    setArticles(response.articles);
                }

            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        consultApi();
    },[ category ]);

  return (
    <Fragment>
        <Header title="Buscador de Noticias"/>
        <div className="container white">
            <Form setCategory={setCategory}/>
            <NoticeList articles={articles}/>
        </div>
    </Fragment>
  );
}

export default App;
