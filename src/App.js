import './App.module.css';
import {useEffect, useState} from "react";
import Characters from "./characters";
import NextButton from "./nextButton";


function App() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => response.json())
            .then((data) => setCharacters(data))

    }, [])

    // const onNext = (url) => {
    //     useEffect(() => {
    //         fetch(url)
    //             .then((response) => response.json())
    //             .then((data) => setCharacters(data.results))
    //     }, [])
    // }


    return (
        <Characters data={characters.results}/>
//<NextButton onNext={onNext(characters.)}

    );
}

export default App;
