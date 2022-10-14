import Settings from '../settings';

test('Настройки по умолчанию', () => {
  const test = new Settings();
  const result = new Map();
  result.set('theme', 'dark').set('music', 'trance').set('difficulty', 'easy');
  expect(test.settings).toEqual(result);
});

test('Пользовательские настройки', () => {
  const test = new Settings();
  test.userSettings.set('theme', 'light').set('difficulty', 'hard');
  const result = new Map();
  result.set('theme', 'light').set('music', 'trance').set('difficulty', 'hard');
  expect(test.settings).toEqual(result);
});
