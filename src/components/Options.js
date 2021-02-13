import React from 'react';

const options = (props) => {
    return(
        <div className={`input-group answer-value-${props.id}`} onClick={() => props.click(props.value)}>
            <div className="input-group-prepend">
                <div className="input-group-text">
                 <input type="radio" aria-label="Radio button for following text input"/>
                </div>
            </div> 
            <label type="text" className="form-control" aria-label="Text input with radio button">{props.value}</label>
        </div>
    );
}

export default options;