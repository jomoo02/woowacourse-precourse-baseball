import ValidationReGame from '../Validations/ValidationReGame.js';
import { RE_GAME_SELECTIONS } from '../constants/setting.js';

class ReGame {
  #answer;

  constructor(answer) {
    ReGame.#validateAnswer(answer);
    this.#answer = answer;
  }

  isReGame() {
    if (this.#answer === RE_GAME_SELECTIONS.reGame) {
      return true;
    }

    return false;
  }

  static #validateAnswer(answer) {
    const validation = new ValidationReGame(answer);
    validation.validateReGame();
  }
}

export default ReGame;
