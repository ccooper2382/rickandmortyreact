import React from 'react';
import styles from './title.module.css'
import Location from "../location/location";

function Title({image, name, status, species, type, gender, location, origin}) {
    return (
        <div className={styles.character__Title}>
            <div className={styles.character__portrait}>
                <img className={styles.character__image} src={image} alt={name}></img>
            </div>
            <div className={styles.character__Stats}>
                <h2>{name}</h2>
                <span>{status} - {species}</span>
                <span>{type} - {gender}</span>
                <Location location={location} origin={origin} />
            </div>
        </div>
    );
}

export default Title;