import React from 'react';
import styles from './title.module.css'


function Title({image, name, status, species, type, gender,}) {
    return (
        <div className={styles.character__Title}>
            <div className={styles.character__portrait}>
                <img className={styles.character__image} src={image} alt={name}></img>
            </div>
            <div className={styles.character__Stats}>
                <h2>{name}</h2>
                <span>{status} - {species}</span>
                <span>{type} - {gender}</span>
            </div>
        </div>
    );
}

export default Title;