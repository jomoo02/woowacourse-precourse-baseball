import Computer from '../src/models/Computer';

describe('컴퓨터 테스트', () => {
  test('컴퓨터의 숫자의 길이가 3이 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new Computer('1');
    }).toThrow();

    expect(() => {
      new Computer('');
    }).toThrow();

    expect(() => {
      new Computer('1356');
    }).toThrow();
  });

  test('컴퓨터의 숫자중 중복된 숫자가 있는 경우 예외 처리한다.', () => {
    expect(() => {
      new Computer('111');
    }).toThrow();

    expect(() => {
      new Computer('131');
    }).toThrow();

    expect(() => {
      new Computer('112');
    }).toThrow();

    expect(() => {
      new Computer('122');
    }).toThrow();
  });

  test('컴퓨터의 숫자는 모두 1 ~ 9 사이의 정수여야 한다. 아닌 경우 예외 처리한다.', () => {
    expect(() => {
      new Computer('110');
    }).toThrow();

    expect(() => {
      new Computer('13a');
    }).toThrow();

    expect(() => {
      new Computer('012');
    }).toThrow();

    expect(() => {
      new Computer('1a2');
    }).toThrow();
  });

  test('컴퓨터의 매치 결과 기본 값은 ball: 0, strike: 0이다.', () => {
    const COMPUTER_NUMBERS = '123';
    const computer = new Computer(COMPUTER_NUMBERS);
    const OUTPUT = { ball: 0, strike: 0 };

    const matchReulst = computer.matchNumbers();

    expect(matchReulst).toEqual(OUTPUT);
  });

  test('컴퓨터는 다른 위치에 같은 값이 있으면 볼 카운터를 늘린다.', () => {
    const COMPUTER_NUMBERS = '123';
    const computer = new Computer(COMPUTER_NUMBERS);
    const NUMBERS = [2, 1, 9];
    const OUTPUT = { ball: 2, strike: 0 };

    const matchReulst = computer.matchNumbers(NUMBERS);

    expect(matchReulst).toEqual(OUTPUT);
  });

  test('컴퓨터는 같은 위치에 같은 값이 있으면 스트라이크 카운터를 늘린다.', () => {
    const COMPUTER_NUMBERS = '123';
    const computer = new Computer(COMPUTER_NUMBERS);
    const NUMBERS = [1, 9, 3];
    const OUTPUT = { ball: 0, strike: 2 };

    const matchReulst = computer.matchNumbers(NUMBERS);

    expect(matchReulst).toEqual(OUTPUT);
  });

  test('컴퓨터 매치 정상 동작 테스트', () => {
    const COMPUTER_NUMBERS = '453';
    const computer = new Computer(COMPUTER_NUMBERS);
    const NUMBERS = [5, 1, 3];
    const OUTPUT = { ball: 1, strike: 1 };

    const matchReulst = computer.matchNumbers(NUMBERS);

    expect(matchReulst).toEqual(OUTPUT);
  });
});
