import React from 'react';
import styles from '../App.module.css'
import Title from "./title";
import Location from "../location";
import Episodes from "./episodes";

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