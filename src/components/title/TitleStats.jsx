import React from 'react';
import styles from "./title.module.css";

function TitleStats({name, status, species, type, gender}) {


    if(type) {
        return    <div className={styles.character__Stats}>
            <h2>{name}</h2>
            <p>Status: {status} </p>
            <p>Species: {species} /  {type}</p>
            <p>Gender: {gender}</p>
        </div>
    }

    return (
        <div className={styles.character__Stats}>
            <h2>{name}</h2>
            <p>Status: {status} </p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
        </div>
    );
}

export default TitleStats;