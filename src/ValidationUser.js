import { IN_RANGE, NUMBERS_LENGTH } from './constants/setting';
import ERROR_MESSAGE from './constants/errorMessage';

const ValidateUser = {
  validateNumbers(numbers) {
    const numbersArray = this.convertToArray(numbers);
    this.checkNumbersLength(numbersArray)
      .checkNotDuplication(numbersArray)
      .checkSomeCondition(numbersArray);

    return numbersArray;
  },

  checkNumbersLength(numbersArray) {
    const isNotEqualLength = numbersArray.length !== NUMBERS_LENGTH;

    if (isNotEqualLength) {
      this.throwError();
    }

    return this;
  },

  checkNotDuplication(numbersArray) {
    const numbersSetSize = new Set(numbersArray).size;
    const isDuplication = numbersArray.length !== numbersSetSize;

    if (isDuplication) {
      this.throwError();
    }

    return this;
  },

  checkSomeCondition(numbersArray) {
    const conditions = [this.isInRange, this.isInteger];
    const isNotCorrect = numbersArray.some((number) =>
      conditions.some((condition) => !condition(number)),
    );

    if (isNotCorrect) {
      this.throwError();
    }

    return this;
  },

  isInteger(number) {
    return Number.isInteger(number);
  },

  isInRange(number) {
    return number >= IN_RANGE.min && number <= IN_RANGE.max;
  },

  convertToArray(numbers) {
    const numbersArray = numbers.split('').map((number) => Number(number));
    return numbersArray;
  },

  throwError() {
    throw new Error(ERROR_MESSAGE.inputNumbers);
  },
};

export default ValidateUser;
