const IN_RANGE_MIN = 1;
const IN_RANGE_MAX = 9;
const NUMBERS_LENGTH = 3;

const RE_GAME = '1';
const END = '2';

const IN_RANGE = Object.freeze({
  min: IN_RANGE_MIN,
  max: IN_RANGE_MAX,
});

const RE_GAME_SELECTIONS = Object.freeze({
  reGame: RE_GAME,
  end: END,
});

export { IN_RANGE, NUMBERS_LENGTH, RE_GAME_SELECTIONS };
