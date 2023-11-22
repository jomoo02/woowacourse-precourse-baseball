import User from '../src/models/User';

describe('유저 객체 테스트', () => {
  test('유저의 숫자의 길이가 3이 아닌 경우 예외 처리한다. ', () => {
    expect(() => {
      new User('12');
    }).toThrow();

    expect(() => {
      new User('1252');
    }).toThrow();

    expect(() => {
      new User('1');
    }).toThrow();

    expect(() => {
      new User('');
    }).toThrow();
  });

  test('유저의 숫자 중 중복된 숫자가 있는 경우 예외 처리한다. ', () => {
    expect(() => {
      new User('122');
    }).toThrow();
  });

  test('유저의 숫자 중 정수가 아닌 값이 있는 경우 예외 처리한다. ', () => {
    expect(() => {
      new User('12a');
    }).toThrow();

    expect(() => {
      new User('12 ');
    }).toThrow();

    expect(() => {
      new User(' 12');
    }).toThrow();
  });

  test('유저의 숫자 모두 1 ~ 9 사이의 정수여야 한다. 아닌 경우 예외 처리한다. ', () => {
    expect(() => {
      new User('120');
    }).toThrow();

    expect(() => {
      new User('-112');
    }).toThrow();

    expect(() => {
      new User('9102');
    }).toThrow();
  });

  test('유저의 숫자를 배열의 형태로 반환한다.', () => {
    const INPUT = '498';
    const OUTPUT = [4, 9, 8];
    const user = new User(INPUT);

    expect(user.getNumbers()).toEqual(OUTPUT);
  });
});
