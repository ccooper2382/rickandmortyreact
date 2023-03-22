import React from 'react';
import styles from './tile.module.css'
import Title from "../title/title";
import Location from "../location/location";
import Episodes from "../episodes/episodes";

function CharacterTile({name, status, species, type, gender, image, location, origin, episodes}) {



    return (

        <section className={styles.flexItem}>
         <Title name={name} species={species} status={status} image={image} type={type} gender={gender}/>
         <Location location={location} origin={origin}/>
         <Episodes episodes={episodes}/>

        </section>

    );
}

export default CharacterTile;