import React from 'react';
import styles from "./episodes.module.css";

function EpisodesList({episodesList}) {
    return (
        <div className={styles.episodes}>
        <h2>Episodes</h2>
        {episodesList.map((episode) => <span className={styles.episodeList} key={episode.id}>{episode.name}</span> )}
    </div>
    );
}

export default EpisodesList;