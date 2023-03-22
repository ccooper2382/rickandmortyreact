import React, {useEffect, useState} from 'react';


function Episodes({episodes}) {
    const [episodesList, setEpisodesList] = useState([])


    useEffect(() => {
        let episodeNumList = []
        for (let i = 0; i < episodes.length; i++) {
            let episodeArray = episodes[i].split("/")
            episodeNumList.push(episodeArray[5] + ",")
        }
        fetch(`https://rickandmortyapi.com/api/episode/${episodeNumList}`)
            .then(response => response.json())
            .then(data => setEpisodesList(data))

    });

    return (

        <div>
            <h2>Episodes</h2>
            {episodesList.map((episode) => <div key={episode.id}>{episode.name}</div> )}
        </div>
    );
}

export default Episodes;