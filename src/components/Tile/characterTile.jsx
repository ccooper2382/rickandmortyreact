import React from 'react';
import Title from "../title/title";
import Episodes from "../episodes/episodes";
import Location from "../location/location";
import styles from './tile.module.css';

function CharacterTile({name, status, species, type, gender, image, location, origin, episodes}) {

    return (
        <article className={styles.flexContainer}>
            <Title name={name} species={species} status={status} image={image} type={type} gender={gender}
                   origin={origin} location={location}/>
            <section className={styles.info}>
            <Location location={location} origin={origin}/>
            <Episodes episodes={episodes}/>
            </section>
        </article>

    );
}

export default CharacterTile;