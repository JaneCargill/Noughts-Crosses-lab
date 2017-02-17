import React from 'react'

class Tile extends React.Component {
  handleClick() { 
    this.props.win();
    this.props.click(this.props.id)
  }

  render() {
    console.log(this.props.children)
    return(
      <div className="grid1" onClick={this.handleClick.bind(this)}>{this.props.children}
      </div>
      ) 


  }

}

export default Tile;