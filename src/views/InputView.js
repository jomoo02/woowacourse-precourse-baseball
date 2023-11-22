import { Console } from '@woowacourse/mission-utils';
import PRINT from '../constants/print';

const InputView = {
  start() {
    Console.print(PRINT.start);

    return this;
  },

  async readUserNumbers() {
    const userNumbers = await Console.readLineAsync(`${PRINT.inputNumbers}\n`);

    return userNumbers;
  },

  async readReGameQuestion() {
    Console.print(PRINT.reGameQuestion);
    const reGameAnswer = await Console.readLineAsync(``);

    return reGameAnswer;
  },
};

export default InputView;
