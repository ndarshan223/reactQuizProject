import React,{useContext, useState} from 'react'
import { Questions } from '../Helpers/QuestionBank';
import { Quizcontext } from '../Helpers/QuizContext';

function Quiz() {
    const [currQuestion,setQuestion]=useState(0);
    const [optionChosen,setOptionChosen]=useState("");
    const {score,setScore,setGameState} = useContext(Quizcontext);
    const nextQuestion=()=>{
         if(Questions[currQuestion].answer === optionChosen){
            setScore(score+1)
                 }
        setQuestion(currQuestion+1)
    }
    const finishQUiz=()=>{
        if(Questions[currQuestion].answer === optionChosen){
            setScore(score+1)
                 }
        setGameState("endScreen")
    }
  return (
    <div className="Quiz">
        <h1>{Questions[currQuestion].prompt}</h1> 
        <div className="options">
            <button onClick={()=>setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button onClick={()=>setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button onClick={()=>setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
        </div>
        {currQuestion===Questions.length-1 ? (
            <button onClick={finishQUiz}>Finish Quiz</button> ):(
        <button onClick={nextQuestion}> Next Question</button>
            )}
    </div>

  )
}

export default Quiz