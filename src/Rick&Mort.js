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
     * Loads data from the server into the state
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
    }, [isLoading]) //this error is also misleading Or I need to learn more about dependency arrays

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
            setCharacters((characters.concat(data)));
            //decided to use concat instead of spread operator
            //spread will iterate over the entire array while concat wil just add one array to the end of the first
            //should lead to better performance.  probably not a big deal on this project but could be useful for larger projects
        }
    }
    /**
     * Updates the info state
     * @param info
     */
    const updateInfo = (info) => {
        setInfo(info)
    }


    if (error === '') {
        return <Fragment>
            {characters.length === 0 ? (
                <span>Loading...</span>
            ) : (
                <CharacterList data={characters} info={info}/>
            )}
        </Fragment>
    }

    return (
        <ErrorComponent error={error}/>

    );
}

export default RickMort;
