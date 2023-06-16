import React from 'react';
import styles from "./title.module.css";

function TitleStats({name, status, species, type, gender}) {

    return (
        <section className={styles.character__Stats}>
            <h2>{name}</h2>
            <p>Status: {status} </p>
            {/*remember this*/}
            {/*{type && / ${type}}: This part is where the conditional rendering happens.*/}
            {/*    The logical AND (&&) operator is used to evaluate the truthiness of the type prop.
            If type is truthy (not null, undefined, false, 0, or an empty string), the expression following && is executed.*/}

            {/*    In this case, the expression following && is `/ ${type}`. This is a template literal that
            concatenates a forward slash (/) and the value of the type prop.*/}

            {/*    If the type prop is truthy, the template literal expression will be evaluated,
             resulting in / {type} being rendered. Otherwise, if the type prop is falsy, the expression is short-circuited, and nothing is rendered.*/}
            <p>Species: {species} {type && `/ ${type}`}</p>
            <p>Gender: {gender}</p>
        </section>
    );
}

export default TitleStats;