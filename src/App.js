import './App.module.css';
import {Fragment, useEffect, useState} from "react";
import CharacterList from "./components/characterList/characterList";

function App() {
    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    //const [error, setError] = useState('')

    useEffect(() => {
        getData(currentPage)
    }, []);

    const updateCharacters = (data) => {
        setCharacters(data)
    }

    const getData = (page) => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => {
                if (!response.ok) {
                    console.log(response.status)
                    throw new Error(`Network response was not ok. Response status: ${response.status}`);

                }
                return response.json();
            })
            .then(data => {
                updateCharacters(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    return (
        <Fragment>
            {characters.length === 0 ? (
                <span>Loading...</span>
            ) : (
                <CharacterList data={characters} />
            )}
        </Fragment>

    );
}

export default App;
