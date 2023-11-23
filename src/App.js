import Game from './Game.js';

class App {
  // eslint-disable-next-line class-methods-use-this
  async play() {
    const game = new Game();
    await game.startGame();
  }
}

export default App;
