import './App.module.css';
import {Fragment, useEffect, useState} from "react";
import CharacterList from "./components/characterList/characterList";

function App() {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    //const [error, setError] = useState('')

    useEffect(() => {
        getData(currentPage)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []); //don't listen to the warning here.  If there is no deps array it will keep loading data till it crashes


   const updatePage = () => {

       if(currentPage === 1) {
            console.log("loading")
        } else if  (currentPage <= info.pages) {
            setCurrentPage(currentPage + 1)
            console.log(info.pages + "RAWR")
        } else {
            setCurrentPage(info.pages)
            console.log(info.pages + "blah")
        }

   }

   const handleScroll = () => {
       if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
       console.log('Fetch more list items!');
   }

    const updateCharacters = (data) => {
        if (characters.length === 0) {
            setCharacters(data)
        } else {
            setCharacters((prevCharacters) => [...prevCharacters, ...data]);
        }
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
                updateCharacters(data.results);
                setInfo(data.info)
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
