import React from 'react';
import Tile from './Tile';


class GameLogic extends React.Component{
  render() {
    return(
      <div className="mainGrid">
        <Tile id={0} className="grid1" click={this.props.update} win={this.props.winner}>{this.props.grid[0]}</Tile>
        <Tile id={1} className="grid1" click={this.props.update} win={this.props.winner}>{this.props.grid[1]}</Tile>
        <Tile id={2} className="grid1" click={this.props.update} win={this.props.winner}>{this.props.grid[2]}</Tile>
        <Tile id={3} className="grid2" click={this.props.update} win={this.props.winner}>{this.props.grid[3]}</Tile>
        <Tile id={4} className="grid2" click={this.props.update} win={this.props.winner}>{this.props.grid[4]}</Tile>
        <Tile id={5} className="grid2" click={this.props.update} win={this.props.winner}>{this.props.grid[5]}</Tile>
        <Tile id={6} className="grid3" click={this.props.update} win={this.props.winner}>{this.props.grid[6]}</Tile>
        <Tile id={7} className="grid3" click={this.props.update} win={this.props.winner}>{this.props.grid[7]}</Tile>
        <Tile id={8} className="grid3" click={this.props.update} win={this.props.winner}>{this.props.grid[8]}</Tile>
      </div>
      ); 
  }
}

export default GameLogic;