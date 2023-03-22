import React, {Fragment} from 'react';

function Location({location, origin}) {

    if (location === origin) {
        return <div>
            <h2>Location/Origin</h2>
            <span>{location}</span>
        </div>
    }
    return (
        <Fragment>
        <div>
            <h2>Last Known Location</h2>
            <span>{location}</span>
        </div>
        <div>
            <h2>Origin</h2>
            <span>{origin}</span>
        </div>
        </Fragment>
    );

}

export default Location;