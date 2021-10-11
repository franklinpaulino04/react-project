import React, {useEffect, useState} from 'react';
import './App.css';

// Components
import ListImages from "./components/ListImages";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

function App() {

    const [search, setSearch] = useState('');
    const [images, setImages] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [totalPage, setTotalPage] = useState(5);
    const [loading, setLoading] = useState(false);

    const consultApi = async () => {
        if (search.trim() === '') {
            return;
        } else {
            setLoading(true);
        }
        const imagesForPages = 30;
        const key = '1732750-d45b5378879d1e877cd1d35a6';
        await fetch(`https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesForPages}&page=${actualPage}`)
            .then((response) => response.json())
            .then((response) => {

                setImages(response.hits);
                setLoading(false);
                // calcular el total de paginas
                const calculateTotalPage = (Math.ceil(response.totalHits / imagesForPages));
                setTotalPage(calculateTotalPage);

                // Mover la pantalla hacia arriba
                const jumbotron = document.querySelector('.jumbotron');
                jumbotron.scrollIntoView({behavior: 'smooth'});

            })
            .catch((error) => console.log(error));
    }

    // definir la página anterior
    const previousPage = () => {
        const newPageActual = (actualPage - 1);

        if (newPageActual === 0) return;

        setActualPage(newPageActual);
    }

    // definir la pagina siguiente
    const nextsPage = () => {
        const newPageActual = (actualPage + 1);

        if (newPageActual > totalPage) return;

        setActualPage(newPageActual);
    }

    useEffect(() => {
        consultApi();
    }, [images, search, totalPage, loading, actualPage]);

    return (
        <div className="container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Form setSearch={setSearch}/>
            </div>

            <div className="row justify-content-center">
                {loading ? <Spinner/> : (<ListImages images={images}/>)}

                {(actualPage === 1 && images.length === 0) ? null : (
                    <button type="button"
                            className="bbtn btn-info mr-1"
                            onClick={previousPage}>&laquo; Anterior </button>)
                }

                {(actualPage === totalPage) ? null : (
                    <button
                        type="button"
                        className="bbtn btn-info"
                        onClick={nextsPage}>Siguiente &raquo;</button>)
                }
            </div>
        </div>
    );
}

export default App;
