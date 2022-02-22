const revString = require('./revStringFunc');
test('reverses string', () => {
  expect(revString('apple')).toBe('elppa');
});