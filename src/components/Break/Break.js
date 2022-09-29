import React from 'react';
import './Break.css'

const Break = ({handleBreak}) => {
    return (
        <div>
            <button onClick={(event)=>handleBreak(event)}>10</button>
            <button onClick={(event)=>handleBreak(event)}>20</button>
            <button onClick={(event)=>handleBreak(event)} >30</button>
            <button onClick={(event)=>handleBreak(event)}>40</button>
        </div>
    );
};

export default Break;