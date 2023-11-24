import User from './models/User.js';
import Computer from './models/Computer.js';
import ReGame from './models/ReGame.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import pickNumbersInRange from './pickNumbersInRange.js';
import { THREE_STRIKE } from './constants/setting.js';

class GameController {
  #computer;

  async startGame() {
    InputView.start();
    await this.setGame();
  }

  setGame() {
    this.#computer = GameController.#createComputer();
    return this.playGame();
  }

  async playGame() {
    const user = await GameController.#createUser();
    const matchResult = this.#computer.matchNumbers(user.getNumbers());
    return this.#outputResult(matchResult);
  }

  #outputResult(matchResult) {
    OutputView.outputMatchResult(matchResult).checkAllMatch(matchResult);

    if (matchResult.strike === THREE_STRIKE) {
      return this.#askReGame();
    }
    return this.playGame();
  }

  async #askReGame() {
    const reGameAnswer = await InputView.readReGameQuestion();

    const reGame = new ReGame(reGameAnswer);
    if (reGame.isReGame()) {
      await this.setGame();
    }
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

export default GameController;
