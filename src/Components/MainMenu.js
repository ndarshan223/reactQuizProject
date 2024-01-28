import React ,{useContext} from 'react';
import { Quizcontext } from '../Helpers/QuizContext';

function MainMenu() {
    const {gameState,setGameState}=useContext(Quizcontext);
  return (
    <div>
              <div className="Menu">
                <button onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
              </div>
    </div>
  )
}

export default MainMenu