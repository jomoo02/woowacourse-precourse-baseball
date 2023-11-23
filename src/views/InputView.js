import { Console } from '@woowacourse/mission-utils';
import PRINT from '../constants/print.js';

const InputView = {
  start() {
    Console.print(PRINT.start);

    return this;
  },

  async readUserNumbers() {
    const userNumbers = await Console.readLineAsync(`${PRINT.inputNumbers}`);

    return userNumbers;
  },

  async readReGameQuestion() {
    const reGameAnswer = await Console.readLineAsync(`${PRINT.reGameQuestion}\n`);

    return reGameAnswer;
  },
};

export default InputView;
