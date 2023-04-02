import React, {useEffect, useState} from 'react';
import styles from './episodes.module.css'
import EpisodesList from "./episodesList";


function Episodes({episodes}) {
    const [episodesList, setEpisodesList] = useState([])
    const [error, setError] = useState('')

//updates the state with the episode names for this specific character
    useEffect(() => {
        let episodeNumList = []
        for (let i = 0; i < episodes.length; i++) {
            let episodeArray = episodes[i].split("/")
            episodeNumList.push(episodeArray[5] , ",")// for some reason without the comma it throws a 'episodesList.map is not a function' edit: It's because the episodeNumList is a comma separated list used in the fetch URL.  Without the  comma the url won't work properly
        }
        fetch(`https://rickandmortyapi.com/api/episode/${episodeNumList}`)
            .then(response => response.json())
            .then(data => setEpisodesList(data))
            .catch(err => console.log(err))

    });

    return (

<EpisodesList episodesList={episodesList}/>
    );
}

export default Episodes;