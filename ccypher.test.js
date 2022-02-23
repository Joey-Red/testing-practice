const cypher = require('./ccypher');
test('cyphers', () => {
  expect(cypher('APPLE')).toBe('NCCYR');
});

