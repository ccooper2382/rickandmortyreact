import React from 'react';

function Character({name, status, species, type, gender, image}) {
    return (

        <section>
        <div>
            <img src={image} alt={name}></img>
        </div>
        <div>
            <h2>{name}</h2>
            <span>{status}</span>
            <span>{species}</span>
            <span>{type}</span>
            <span>{gender}</span>

        </div>
        </section>
    );
}

export default Character;