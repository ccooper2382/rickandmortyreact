import './App.module.css';
import {Fragment, useEffect, useState} from "react";
import CharacterList from "./components/characterList/characterList";
import ErrorComponent from "./components/error/ErrorComponent";

function RickMort() {
    const [characters, setCharacters] = useState([])
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    /**
     * The initial URL to access the first page of data from the server
     * @type {string}
     */
    const initialURL = "https://rickandmortyapi.com/api/character/"

    /**
     * Initiates the first server call to populate characters and info and loads event handlers
      */
    useEffect(() => {
        getData(initialURL)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []); //don't listen to the warning here.  If there is no deps array it will keep loading data till it crashes

    /**
     * loads the next page of data
     */
    useEffect(() => {
        if (!isLoading) return

        if (info.next !== null) {
            getData(info.next)
        }
console.log('rawr')
    }, [isLoading]) //this error is also misleading

    /**
     * event handler for infinite scroll
     */
    const handleScroll = () => {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

        if (windowHeight + scrollPosition >= documentHeight) {
            setIsLoading(true);
        }
    }
    /**
     * Updates the characters state
     * @param data
     */
    const updateCharacters = (data) => {
        if (characters.length === 0) {
            setCharacters(data)
        } else {
            setCharacters((prevCharacters) => [...prevCharacters, ...data]);
        }
    }
    /**
     * Updates the info state
     * @param info
     */
    const updateInfo = (info) => {
        setInfo(info)
    }

    /**
     * Loads data from the server
     * @param url
     */
    const getData = (url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok. Response status: ${response.status}`)
                }
                return response.json()
            })
            .then(data => {
                updateCharacters(data.results)
                updateInfo(data.info)
            })
            .catch(error => {
                setError(`Error fetching data: ${error}`)
            })
            .finally(() => {
            setIsLoading(false)
        })
    }


    if (error === '') {
        return <Fragment>
            {characters.length === 0 ? (
                <span>Loading...</span>
            ) : (
                <CharacterList data={characters} info={info}/>
            )}
        </Fragment>
    } else {
        return <ErrorComponent error={error}/>
    }


    return (
        <div>If you see this something has gone very wrong</div>

    );
}

export default RickMort;
