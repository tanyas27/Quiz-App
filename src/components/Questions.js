import React, { useEffect, useState } from 'react';
import axios from '../axios';
import QuestionCard from './QuestionCard';
import Score from './Score';
import './Questions.css';

const Questions = ( props ) => {
    const [quizName, setQuizName] = useState();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [scores, setScores] = useState();
    const [idx, setIdx] = useState(0);
    const [marksScored, setMarksScored] = useState();


    const fetchData = () => {
        axios.get(`api/quiz-questions/all/${props.id}`)
        .then(response => {
            let data = response.data;
            setQuizName(data.name);
            setQuestions(data.questions);
        });
    }

    useEffect(fetchData,[]);

    const handleNext = (val) => {
        let ansArr = [...answers];
        let tempAns = {
            "ques_id": questions[idx].id,
            "submitted_option": val
        }
        ansArr.push(tempAns);
        setAnswers(ansArr);
        if(idx === questions.length-1){
            submitQuiz(ansArr); 
        }
        setIdx(idx+1);
    }

    const submitQuiz = (answers) => {
        axios.post('api/user/quiz-score',
        {
            "quiz_id": `${props.id}`,
            "mappings": [...answers]
        })
        .then(res => {
            setScores(res.data.questions)
            setMarksScored(res.data.score);
        });
    }
   
    return(
      <div className="questions">
        <h1 className="quiz-name">{quizName}</h1> 
        <div>
          {(idx < questions.length) ?
            <QuestionCard id={questions[idx].id} size={questions.length} question={questions[idx].name} options={questions[idx].options.split(",")} click={handleNext}/>
           : (scores) && <Score questions={questions} answers={scores} score={marksScored}/>}
        </div>
      </div>
    );
}

export default Questions;