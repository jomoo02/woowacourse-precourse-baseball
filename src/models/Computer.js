import User from './User';

class Computer extends User {
  #count;

  constructor(numbers) {
    super(numbers);
    this.#count = { ball: 0, strike: 0 };
  }

  getMatchCount() {
    return this.#count;
  }

  matchNumbers(userNumbers) {
    this.#matchBall(userNumbers).#matchStrike(userNumbers);
  }

  #matchBall(userNumbers) {
    const computerNumbers = this.getNumbers();
    const ballCount = computerNumbers.filter((computerNumber, index) => {
      const notIndexUserNumbers = [...userNumbers.slice(0, index), ...userNumbers.slice(index + 1)];
      const isExistBall = notIndexUserNumbers.includes(computerNumber);
      return isExistBall;
    }).length;

    this.#count.ball = ballCount;

    return this;
  }

  #matchStrike(userNumbers) {
    const computerNumbers = this.getNumbers();
    const strikeCount = computerNumbers.filter(
      (computerNumber, index) => computerNumber === userNumbers[index],
    ).length;

    this.#count.strike = strikeCount;

    return this;
  }
}

export default Computer;
