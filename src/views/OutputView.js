import { Console } from '@woowacourse/mission-utils';
import PRINT from '../constants/print.js';

const OutputView = {
  outputMatchResult(result) {
    const matchResultString = this.makeMatchResultString(result);
    Console.print(matchResultString);

    return this;
  },

  checkAllMatch({ strike }) {
    if (strike === 3) {
      Console.print(PRINT.allMatch);
    }

    return this;
  },

  makeMatchResultString(result) {
    const filteredMatchResultArray = Object.entries(result).filter(([, count]) => count !== 0);

    if (filteredMatchResultArray.length === 0) {
      return PRINT.none;
    }

    const matchResultString = filteredMatchResultArray.map(
      ([type, count]) => `${count}${PRINT[type]}`,
    );

    return matchResultString.join(' ');
  },
};

export default OutputView;
