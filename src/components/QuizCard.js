import React from 'react';
import './QuizCard.css';

const quizCard = (props) => {
    return(
      <div className="quizCard">
        <div className="header">
            <h3 className={`quiz-list-${props.id}`}>
                {props.name}
            </h3>
            <button onClick={props.change} className={` btn btn-success start-quiz-${props.id}`}>
                Start
            </button>
        </div>
        <hr/>
        <div>
            {props.description}
        </div>
      </div>
    );
}

export default quizCard;