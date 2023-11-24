import { RE_GAME_SELECTIONS } from '../constants/setting.js';
import ERROR_MESSAGE from '../constants/errorMessage.js';

class ValidationReGame {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  validateReGame() {
    this.#checkInteger().#checkCorrectAnswer();
  }

  #checkInteger() {
    const isNotInteger = !Number.isInteger(Number(this.#answer));

    if (isNotInteger) {
      ValidationReGame.#throwError();
    }

    return this;
  }

  #checkCorrectAnswer() {
    const correctAnswers = Object.values(RE_GAME_SELECTIONS);
    const isNotCorrect = !correctAnswers.includes(this.#answer);

    if (isNotCorrect) {
      ValidationReGame.#throwError();
    }

    return this;
  }

  static #throwError() {
    throw new Error(ERROR_MESSAGE.reGameAnswer);
  }
}

export default ValidationReGame;
