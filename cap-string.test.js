const capitalize = require('./capFunction');
test('capitalizes first character', () => {
  expect(capitalize('apple')).toBe('Apple');
});