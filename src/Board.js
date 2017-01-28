import React, {Component} from 'react';
import './Board.min.css'

export default class Board extends Component {
  constructor(props){
    super(props);

    this.state = {
      gameRunning: false,
      turns: 1,
      highScore: 0,
      userTurn: false,
      userMoves: [],
      computerMoves: [],
      animated: null
    }
    this.onGameButtonClick = this.onGameButtonClick.bind(this)
  }
  updateHighScore(){
    this.setState({highScore: this.state.highScore + 1});
  }
  onGameButtonClick(id){
    if(this.state.userTurn){
      this.setState({
        animated: id
      });
      // setTimeout(function(){
      //   this.setState({
      //     animated: null
      //   }.bind(this), 1000)
      // })

    }
  }
  runGame(){
    if(!this.state.userTurn){
      let randomTile = Math.floor(Math.random() * 4) + 1;

      this.setState({
        turns: this.state.turns + 1,
        computerMoves: this.state.computerMoves.push(randomTile),
        userTurn: true
       })
       console.log(this.state.computerTurns)
    }
  }
  getClasses(id){
    const gameTiles = ['game-board-green', 'game-board-red', 'game-board-blue', 'game-board-yellow'];
    return `game-board-tile ${gameTiles[id]} ${this.state.animated === id ? 'animated' : ''}`

  }
  render(){
    return(
      <div className="game-board">
        <div className="game-board-bg">
          <div className={this.getClasses(0)} id={0}></div>
          <div className={this.getClasses(1)} id={1}></div>
          <div className={this.getClasses(2)} id={2}></div>
          <div className={this.getClasses(3)} id={3}></div>

          <div className="controls-bg">
            <div className="controls">
              <em>Simon Says</em>
              Current High Score <br/>
              {this.state.highScore}
              <div className="controls-btn">

                <button onClick={this.runGame.bind(this)}>Play</button>
                <button>Reset</button>
                <button onClick={() => this.onGameButtonClick(3)}>Test Button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
