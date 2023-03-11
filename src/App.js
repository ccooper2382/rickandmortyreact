import './App.module.css';
import {Fragment, useEffect, useState} from "react";
import Characters from "./characters";
import NextButton from "./nextButton";
import Pagination from "./pagination";


function App() {
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then((response) => response.json())
            .then((data) => setCharacters(data))

    }, [currentPage])

    const handleNext = () => {
        setCurrentPage(currentPage+1)
    }

    const handlePrev = () => {
        setCurrentPage(currentPage-1)
    }


    return (
        <Fragment>
        <Characters data={characters.results}/>
       <Pagination max={characters.info.pages} current={currentPage} onNext={handleNext} onPrev={handlePrev}/>
        </Fragment>

    );
}

export default App;
