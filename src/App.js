import  React , { useState, useContext } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu';
import { Quizcontext } from './Helpers/QuizContext';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';



function App() {
  const [gameState,setGameState]= useState("menu");
  const [ score,setScore]=useState(0);
  return (
    <div className="App">
      <h1> Quiz contest</h1>
      <Quizcontext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
      </Quizcontext.Provider>
    </div>
  );
}

export default App;
