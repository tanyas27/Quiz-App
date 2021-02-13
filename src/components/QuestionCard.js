import React from 'react';
import Options from './Options';
import Timer from './Timer';
import './QuestionCard.css';

const questionCard = (props) => {
    const options = props.options.map((a,idx) => <Options value={a} key={idx} id={idx+1} click={props.click}/> );
    return(
        <>
            <div id="timer-progress">
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: `${(props.id * 100 )/props.size}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <Timer timerEnd={props.click} id={props.id}/>
            </div>
            <div className="question-card">
                <div className="question">{props.question}</div>
                {options}
            </div>
        </>        
    );
}

export default questionCard;