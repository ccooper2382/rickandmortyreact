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
        //thats really all it took?  just make it an object instead of an array and it works great
        // this is what I was doing setCharacters([...characters, data])  and it made the state undefined
        // and threw an error App.js:31 Error fetching data: TypeError: characters is not iterable
        setCharacters({...characters, ...data})
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
        <div>
            {characters.info===undefined ? <span>fail</span> : <CharacterList data={characters} />}
        </div>

    );
}

export default App;
