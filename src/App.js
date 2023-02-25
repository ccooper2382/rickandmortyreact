import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import Characters from "./characters";

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
  }, [])


  return (
          <Characters data={characters} />

  );
}

export default App;
