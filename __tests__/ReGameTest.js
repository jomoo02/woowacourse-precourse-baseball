import ReGame from '../src/models/ReGame';

describe('게임 재시작 테스트', () => {
  test('빈 값을 전달하는 경우 에러 처리한다.', () => {
    expect(() => {
      new ReGame();
    }).toThrow();
  });

  test('정수가 아니면 경우 에러 처리한다.', () => {
    expect(() => {
      new ReGame('a');
    }).toThrow();

    expect(() => {
      new ReGame('1.5');
    }).toThrow();
  });

  test('1(재시작) ~ 2(종료) 값이 아니면 에러 처리한다.', () => {
    expect(() => {
      new ReGame('3');
    }).toThrow();

    expect(() => {
      new ReGame('0');
    }).toThrow();
  });

  test('"1"을 전달하면 true를 반환한다.', () => {
    const INPUT = '1';
    const OUTPUT = true;
    const reGame = new ReGame(INPUT);
    const answer = reGame.isReGame();

    expect(answer).toBe(OUTPUT);
  });

  test('"2"을 전달하면 false를 반환한다.', () => {
    const INPUT = '2';
    const OUTPUT = false;
    const reGame = new ReGame(INPUT);
    const answer = reGame.isReGame();

    expect(answer).toBe(OUTPUT);
  });
});
