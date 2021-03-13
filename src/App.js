import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';







class App extends Component {
  state = {
   value1:Math.floor(Math.random() * 100),
    value2:Math.floor(Math.random() * 100),
    value3:Math.floor(Math.random() * 100),
    numQuestions:0,
    numCorrect: 0
  }
 calculateScore = (proposedAnswer,input) => {
  let values =   this.state.value1 + this.state.value2 + this.state.value3;
   const bol = values === proposedAnswer
   if(input === bol){
   this.setState((prev)=>{
    return{
    value1:Math.floor(Math.random() * 100),
      value2:Math.floor(Math.random() * 100),
      value3:Math.floor(Math.random() * 100),
      numQuestions: prev.numQuestions + 1,
      numCorrect: prev.numCorrect + 1
    }
   })
     
 }
   else{
    this.setState((prev)=>{
    return{
    value1:Math.floor(Math.random() * 100),
      value2:Math.floor(Math.random() * 100),
      value3:Math.floor(Math.random() * 100),
      numQuestions: prev.numQuestions + 1,
      numCorrect: prev.numCorrect 
    }
   })
   
   }
 }
  render() {
    const proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={()=>{this.calculateScore(proposedAnswer,true)}}>True</button>
          <button onClick={()=>{this.calculateScore(proposedAnswer,false)}}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
