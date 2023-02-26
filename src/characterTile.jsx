import React from 'react';
import styles from './App.module.css'

function CharacterTile({name, status, species, type, gender, image, location, locationURL}) {
    return (

        <section className={styles.flexItem}>
            <div>
                <img className={styles.image} src={image} alt={name}></img>
            </div>
            <div>
                <h2>{name}</h2>
                <span>{status} - {species}</span>
            </div>
            <div>
                <span>{type}</span>
                <span>{gender}</span>
            </div>
            <div>
                <span>Last Known Location</span>
                <a href={locationURL}>{location}</a>

            </div>
        </section>
    );
}

export default CharacterTile;