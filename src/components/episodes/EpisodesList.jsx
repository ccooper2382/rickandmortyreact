import React from 'react';
import styles from "./episodes.module.css";

function EpisodesList({episodesList}) {
    return (
        <section className={styles.episodes}>
            <h2>Episodes</h2>
            {episodesList.map((episode) => <span className={styles.episodeList} key={episode.id}>{episode.name}</span>)}
        </section>
    );
}

export default EpisodesList;