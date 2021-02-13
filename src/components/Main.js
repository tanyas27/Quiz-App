import React, { useState } from 'react';
import AllQuizes from './AllQuizes';
import Questions from './Questions';

function Main() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizId, setQuizId] = useState();
  const startQuiz = (id) => {
    setShowQuiz(true);
    setQuizId(id);
  }
  return (
    <React.Fragment>
        {(!showQuiz) ? <AllQuizes change={startQuiz}/> : <Questions id={quizId}/>}
    </React.Fragment>
  );
}

export default Main;
