import React from 'react';

const answers = (props) => {
    return(
      <div className="answers">
        <div className= {`question-${props.id}`} >Question: {props.ques}</div>
        <div className= {`submitted-answer-${props.id}`}>Your Answer: {props.yourAns}</div>
        <div className= {`correct-answer-${props.id}`}>Correct Answer: {props.correctAns}</div>
      </div>
    );
}

export default answers;