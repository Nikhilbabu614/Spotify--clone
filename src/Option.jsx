import React from 'react';
import './Option.css';

function Option({title , Icon}) {
    return (
        <div className="option">
            {Icon && <Icon className="icon" />}
            <h4>{title}</h4>
        </div>
    )
}

export default Option;
