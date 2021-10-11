import React, {Fragment, useEffect, useState} from 'react';
import './App.css';

// Components
import Form from "./components/Form";
import Song from "./components/Song";
import Info from "./components/Info";
import Spinner from "./components/Spinner";

function App() {

  const [searchLetter, setSearchLetter] = useState({});
  const [letter, setLetter] = useState('');
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(true);

    const consultApi = async () => {

        if(Object.keys(searchLetter).length === 0){
            setLoading(false);
            return;
        }else{
            setLoading(true);
        }

        const { song, artist } = searchLetter;

        const [letter_data, information_data] = await Promise.all([
            fetch( `https://api.lyrics.ovh/v1/${artist}/${song}`).then((response) => response.json()),
            fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`).then((resp) => resp.json()),
        ]);

        setLetter(letter_data.lyrics);
        setInformation(information_data.artists[0]);
        setLoading(false);
        setSearchLetter({});
    }

  useEffect(()  => {
      consultApi();

  },[searchLetter]);

  return (
      <Fragment>
        <Form setSearchLetter={setSearchLetter}/>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
                { loading ? <Spinner/> : (<Info information={information}/>) }
            </div>
            <div className="col-md-6">
                { loading ? <Spinner/> : <Song letter={letter}/> }
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default App;
