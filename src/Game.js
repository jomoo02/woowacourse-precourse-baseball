import User from './models/User.js';
import Computer from './models/Computer.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import pickNumbersInRange from './pickNumbersInRange.js';

class Game {
  #computer;

  async startGame() {
    InputView.start();
    await this.setGame();
  }

  setGame() {
    this.#computer = Game.#createComputer();
    return this.playGame();
  }

  async playGame() {
    const user = await Game.#createUser();
    const matchResult = this.#computer.matchNumbers(user.getNumbers());
    await this.#outputResult(matchResult);
  }

  #outputResult(matchResult) {
    OutputView.outputMatchResult(matchResult).checkAllMatch(matchResult);

    if (matchResult.strike === 3) {
      return this.#askReGame();
    }
    return this.playGame();
  }

  async #askReGame() {
    const reGameAnswer = await InputView.readReGameQuestion();

    if (reGameAnswer === '1') {
      return this.setGame();
    }

    return this;
  }

  static #createComputer() {
    const randomNumbers = pickNumbersInRange();
    const computer = new Computer(randomNumbers);

    return computer;
  }

  static async #createUser() {
    const inputNumbers = await InputView.readUserNumbers();
    const user = new User(inputNumbers);

    return user;
  }
}

export default Game;
