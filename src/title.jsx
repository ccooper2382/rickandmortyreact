import React from 'react';
import styles from './App.module.css'

function Title({image, name, status, species}) {
    return (
        <div>
            <div>
                <img className={styles.image} src={image} alt={name}></img>
            </div>
            <div>
                <h2>{name}</h2>
                <span>{status} - {species}</span>
            </div>
        </div>
    );
}

export default Title;