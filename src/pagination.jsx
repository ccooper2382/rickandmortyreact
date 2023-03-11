import React from 'react';

function Pagination({current, max, onNext, onPrev}) {

    const prevButton = current = 1 ?  <button disabled={true}>Prev</button> : <button onClick={onPrev}>Prev</button>
    const nextButton = current >= max ?  <button disabled={true}>Next</button> : <button onClick={onNext}>Next</button>


    return (
        <div>
            {prevButton}
            <span>1</span>
            <span>...</span>
            <span>{current}</span>
            <span>...</span>
            <span>{max}</span>
            {nextButton}
        </div>
    );
}

export default Pagination;