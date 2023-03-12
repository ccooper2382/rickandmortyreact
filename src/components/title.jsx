import React from 'react';
import styles from '../App.module.css'

function Title({image, name, status, species, type, gender}) {
    return (
        <div>
            <div>
                <img className={styles.image} src={image} alt={name}></img>
            </div>
            <div>
                <h2>{name}</h2>
                <span>{status} - {species}</span>
                <span>{type} - {gender}</span>
            </div>
        </div>
    );
}

export default Title;