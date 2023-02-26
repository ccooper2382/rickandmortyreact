import React from 'react';
import Location from "./location";

function Locations({data}) {
    return (
        <div>
            {data.map((location) => <Location key = {location.id}
                                                name={character.name}
                                                image={character.image}
                                                type={character.type}
                                                species={character.species}
                                                status={character.status}/>) }

        </div>
    );
}

export default Locations;