import React from 'react';
import Answer from './Answer';
import './Score.css';

const score = (props) => {
    return(
      <div className="score-card">
        <h1 className="score">Your Score is: {props.score}</h1>
        <h3>Answers</h3>
        <div className="ans-list">        
        {props.answers.map(( a ,idx) => <Answer id={idx+1} key={a.ques_id}
         ques={props.questions[idx].name} 
         yourAns={a.submitted_option} 
         correctAns={a.correct_option}/>) }
        </div>
      </div>
    );
}

export default score;