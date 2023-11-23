import ValidateUser from '../ValidationUser.js';

class User {
  #numbers;

  constructor(numbers) {
    this.#numbers = User.#validateNumbers(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }

  static #validateNumbers(numbers) {
    return ValidateUser.validateNumbers(numbers, 'user');
  }
}

export default User;
