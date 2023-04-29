import './App.module.css';
import {Fragment, useEffect, useState} from "react";
import CharacterList from "./components/characterList/characterList";

function App() {
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    //const [error, setError] = useState('')

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
            .then(response => {
                if (!response.ok) {
                    console.log(response.status)
                    throw new Error(`Network response was not ok. Response status: ${response.status}`);

                }
                return response.json();
            })
            .then(data => {
                setCharacters(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [currentPage]);

    const handleNext = () => {
        setCurrentPage(currentPage+1)
    }

    const handlePrev = () => {
        setCurrentPage(currentPage-1)
    }

    return (
        <div>
            {characters.info===undefined ? <span></span> : <CharacterList data={characters} onNext={handleNext} onPrev={handlePrev} currentPage={currentPage}/>}
        </div>

    );
}

export default App;
