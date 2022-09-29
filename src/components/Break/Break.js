import React from 'react';
import './Break.css'

const Break = ({handleBreak}) => {
    return (
        <div className='break-btn'>
            <button onClick={(event)=>handleBreak(event)}>10m</button>
            <button onClick={(event)=>handleBreak(event)}>20m</button>
            <button onClick={(event)=>handleBreak(event)}>30m</button>
            <button onClick={(event)=>handleBreak(event)}>40m</button>
        </div>
    );
};

export default Break;