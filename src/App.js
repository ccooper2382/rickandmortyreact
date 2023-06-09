import './App.module.css';
import {Fragment, useEffect, useState} from "react";
import CharacterList from "./components/characterList/characterList";

function App() {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    const initialURL = "https://rickandmortyapi.com/api/character/"

    useEffect(() => {
        getData(initialURL)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []); //don't listen to the warning here.  If there is no deps array it will keep loading data till it crashes

    useEffect(() => {
        if (!isLoading) return

        if (info.next !== null) {
            getData(info.next)
        }

    }, [isLoading]) //this error is also misleading

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsLoading(true)
    }

    const updateCharacters = (data) => {
        if (characters.length === 0) {
            setCharacters(data)
        } else {
            setCharacters((prevCharacters) => [...prevCharacters, ...data]);
        }
    }

    const updateInfo = (info) => {
        setInfo(info)
    }


    const getData = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    console.log(response.status)
                    throw new Error(`Network response was not ok. Response status: ${response.status}`);

                }
                return response.json();
            })
            .then(data => {
                updateCharacters(data.results);
                updateInfo(data.info)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        setIsLoading(false)
    }


    return (
        <Fragment>
            {characters.length === 0 ? (
                <span>Loading...</span>
            ) : (
                <CharacterList data={characters} info={info}/>
            )}
        </Fragment>

    );
}

export default App;
