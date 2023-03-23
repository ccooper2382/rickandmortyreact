import React, {useEffect, useState} from 'react';


function Episodes({episodes}) {
    const [episodesList, setEpisodesList] = useState([])

//updates the state with the episode names for this specific character
    useEffect(() => {
        let episodeNumList = []
        for (let i = 0; i < episodes.length; i++) {
            let episodeArray = episodes[i].split("/")
            episodeNumList.push(episodeArray[5] + ",")// for some reason without the comma it throws a 'episodesList.map is not a function'
        }
        fetch(`https://rickandmortyapi.com/api/episode/${episodeNumList}`)
            .then(response => response.json())
            .then(data => setEpisodesList(data))

    });

    return (

        <div>
            <h2>Episodes</h2>
            {episodesList.map((episode) => <span key={episode.id}>{episode.name}, </span> )}
        </div>
    );
}

export default Episodes;