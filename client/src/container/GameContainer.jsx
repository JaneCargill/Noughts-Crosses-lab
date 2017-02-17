import React from 'react';
import GameLogic from '../component/GameLogic'

class GameContainer extends React.Component{
  constructor() {
    super();
    this.state = { grid: ["", "", "", "", "", "", "", "", ""], players: ["X", "O"]}
  }
  updateGame(position) {
    var newGrid = [...this.state.grid]
    newGrid[position] = this.state.players[0];
    var newPlayer = [...this.state.players];
    newPlayer.unshift(newPlayer.pop())
    this.setState({ grid: newGrid, players: newPlayer} );
  }
  winnerCheck() {

    //   console.log("hi")
    //   console.log(this.state.grid)
    // switch(this.state.grid) {
    
      // case this.state.grid[0] === "X":
      // console.log("you win")
      // break;
      if(this.state.grid[3] && this.state.grid[4] && this.state.grid[5] === "X" || "O"){
      return "you win"
      // break;
      // case this.state.grid[6] && this.state.grid[7] && this.state.grid[8] === "X" || "O":
      // "you win"
      // break;
      // case this.state.grid[0] && this.state.grid[3] && this.state.grid[6] === "X" || "O":
      // "you win"
      // break;
      // case this.state.grid[1] && this.state.grid[4] && this.state.grid[7] === "X" || "O":
      // "you win"
      // break;
      // case this.state.grid[2] && this.state.grid[5] && this.state.grid[8] === "X" || "O":
      // "you win"
      // break;
      // case this.state.grid[0] && this.state.grid[4] && this.state.grid[8] === "X" || "O":
      // "you win"
      // break;
      // case this.state.grid[2] && this.state.grid[4] && this.state.grid[6] === "X" || "O":
      // "you win"
      // default:
      // return "next turn";
    } 
  }
  render() {
    // console.log("rendering...");
    return(
      <div>
        <p>A half working game of Tic Tac Toe</p>
        <GameLogic grid={this.state.grid} update={this.updateGame.bind(this)} winner={this.winnerCheck.bind(this)}/>
      </div>
      );
  }
}

export default GameContainer;