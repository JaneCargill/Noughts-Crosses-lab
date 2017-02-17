import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './container/GameContainer'

window.onload = () => {
  ReactDOM.render(
    <GameContainer title="Tic-Tac-Toe" />,
    document.getElementById('app')
  );
}
