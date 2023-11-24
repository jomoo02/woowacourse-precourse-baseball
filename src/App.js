import GameController from './GameController.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const game = new GameController();
    await game.startGame();

import { printStartApp } from './print.js';
import main from './main.js';
}

export default App;
