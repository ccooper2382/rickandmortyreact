import React from 'react';
import Title from "../title/Title";
import Episodes from "../episodes/Episodes";
import Location from "../location/Location";
import styles from './tile.module.css';

function CharacterTile({name, status, species, type, gender, image, location, origin, episodes}) {

    return (
        <article className={styles.flexContainer}>
            <Title name={name} species={species} status={status} image={image} type={type} gender={gender}
                   origin={origin} location={location}/>
            <Location location={location} origin={origin}/>
            <Episodes episodes={episodes}/>

        </article>

    );
}

export default CharacterTile;