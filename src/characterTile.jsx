import React from 'react';
import styles from './App.module.css'
import Title from "./title";
import Location from "./location";

function CharacterTile({name, status, species, type, gender, image, location, origin}) {
    return (

        <section className={styles.flexItem}>
         <Title name={name} species={species} status={status} image={image}/>
         <Location location={location} origin={origin}/>

        </section>

    );
}

export default CharacterTile;