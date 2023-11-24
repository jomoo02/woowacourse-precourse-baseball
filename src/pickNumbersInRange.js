import { Random } from '@woowacourse/mission-utils';
import { IN_RANGE, NUMBERS_LENGTH } from './constants/setting.js';

function pickNumbersInRange(numbers = []) {
  if (numbers.length < NUMBERS_LENGTH) {
    const number = Random.pickNumberInRange(IN_RANGE.min, IN_RANGE.max);
    if (!numbers.includes(number)) {
      return pickNumbersInRange([...numbers, number]);
    }
    return pickNumbersInRange([...numbers]);
  }

  return numbers.join('');
}

export default pickNumbersInRange;
