import User from './User.js';

class Computer extends User {
  matchNumbers(userNumbers = []) {
    const ballCount = this.#matchBall(userNumbers);
    const strikeCount = this.#matchStrike(userNumbers);

    return { ball: ballCount, strike: strikeCount };
  }

  #matchBall(userNumbers) {
    const computerNumbers = this.getNumbers();
    const ballCount = computerNumbers.filter((computerNumber, index) => {
      const notIndexUserNumbers = [...userNumbers.slice(0, index), ...userNumbers.slice(index + 1)];
      const isExistBall = notIndexUserNumbers.includes(computerNumber);
      return isExistBall;
    }).length;

    return ballCount;
  }

  #matchStrike(userNumbers) {
    const computerNumbers = this.getNumbers();
    const strikeCount = computerNumbers.filter(
      (computerNumber, index) => computerNumber === userNumbers[index],
    ).length;

    return strikeCount;
  }
}

export default Computer;
