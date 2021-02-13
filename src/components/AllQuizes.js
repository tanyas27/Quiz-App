import React, { useEffect, useState } from 'react';
import axios from '../axios';
import QuizCard from './QuizCard';
import './AllQuizes.css';

const AllQuizes = (props) => {
    const [data, setData] = useState();
    const fetchData = () => {
        axios.get(`api/quiz/all`)
        .then(response => {
            var tempData =  response.data.map(a => 
              <QuizCard key={a.id} id={a.id} change={() => props.change(a.id)} name={a.name} description= {a.description}/>
            )
            setData(tempData);
        });
    }

    useEffect(fetchData,[]);
   
    return(
      <div className="all-quizes">
        <h1>Welcome to CodeJudge</h1> 
        <div>
           {data}
        </div>
      </div>
    );
}

export default AllQuizes;