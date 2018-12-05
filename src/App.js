import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer, nextQuestion, prevQuestion, submit, end} from './redux/actions.js';
import Game from './Game.js';
import './css/App.css';

//export default
class App extends Component {
  render() { //background-image: url("");
    console.log(this.props);
    return(
      <div className="App">
            <div className="todo">
                <Game question = {this.props.questions[this.props.currentQuestion]}
                  onQuestionAnswer={(answer) => {
                    this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}/>
            </div>
            <div className="botones">
                <button id="prev" onClick={()=>this.props.dispatch(prevQuestion(this.props.currentQuestion, this.props.questions.length))}>PREV</button>
                <button id="next" onClick={()=>this.props.dispatch(nextQuestion(this.props.currentQuestion, this.props.questions.length))}>NEXT</button>
                <button id="submit" onClick={()=>this.props.dispatch(submit(this.props.questions))}>SUBMIT</button>
                <button id="end" onClick={()=>this.props.dispatch(end(this.props.questions))}>END</button>
            </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.score,
    finished: state.finished,
    currentQuestion: state.currentQuestion,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(App)

/*
Para poner los bordes redondos de los botones
border-top-left-radius: 80px 80px;
border-top-right-radius: 80px 80px;
border-bottom-left-radius: 80px 80px;
border-bottom-right-radius: 80px 80px;


*************INCISO**************
Creo que se podría hacer todo el en app.js
Sobretodo para el css es mas fácil



Para poner iconos en los imagenes <button><img src="">NOMBRE</button>
*/
