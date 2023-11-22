import { Console } from '@woowacourse/mission-utils';
import PRINT from '../constants/print';

const OutputView = {
  outputMatchResult(result) {
    const resultArray = Object.entries(result);

    const resultString = resultArray.reduce((acc, cur) => acc + this.makeMatchString(cur), '');

    Console.print(resultString);
  },

  makeMatchString([type, count]) {
    if (count) {
      return `${count}${PRINT[type]}`;
    }

    return '';
  },
};

export default OutputView;
