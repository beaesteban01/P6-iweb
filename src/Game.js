import React from 'react' ;
import './css/Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.appClick = this.appClick.bind(this);
  }

  appClick() {
    var x = document.getElementsByClassName('imagen');
    var y = document.getElementsByClassName('tipslist');
    if (x.display === "inline" && y.display === "none") {
      x.display = "none";
      y.style.display = "inline";
    } else {
      x.display = "inline";
      y.display = "none";
    }
  }

  render () {
    return (
      <div>
        <h1 className="GameQuestion">
          {this.props.question.question}
        </h1>
        <div className="cuadro">
          <div><img className="imagen" display="inline" src={this.props.question.attachment.url} width="400" height="300" alt=""/></div>
          <input className="texto" type="text" placeholder="Introduzca aquí la respuesta" value={this.props.question.userAnswer || ""} onChange={(e)=> {
              this.props.onQuestionAnswer(e.target.value);
          }}/>
          <button id="tips" onClick={this.appClick}>Tips</button>
          <li id="tipslist" display="none" >{this.props.question.attachment.tips}</li>
        </div>
      </div>
    );
  }
}
