import React,{useContext, useState} from 'react'
import { Questions } from '../Helpers/QuestionBank';
import { Quizcontext } from '../Helpers/QuizContext';


function EndScreen() {
    const { score,setScore,setGameState } = useContext(Quizcontext);
    const restartQuiz=()=>{
        setScore(0);
        setGameState("menu")
    }
  return (
    <div className="EndScreen">
        <h1> Quiz finished</h1>
        <h3> {score}/{Questions.length}</h3>
        <button onClick={restartQuiz}> Restart Quiz</button>
    </div>
  )
}

export default EndScreen