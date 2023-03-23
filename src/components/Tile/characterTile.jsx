import React from 'react';
import styles from './tile.module.css'
import Title from "../title/title";
import Episodes from "../episodes/episodes";

function CharacterTile({name, status, species, type, gender, image, location, origin, episodes}) {



    return (

        <section className={styles.flexContainer}>
         <Title name={name} species={species} status={status} image={image} type={type} gender={gender} origin={origin} location={location}/>
         <Episodes episodes={episodes}/>
        </section>

    );
}

export default CharacterTile;