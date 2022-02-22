const simpleCalc = require('./simpleCalcFunc');
test('Calculates', () => {
  expect(simpleCalc.add(1, 1)).toBe(2);
});

test('Calculates', () => {
  expect(simpleCalc.subtract(2, 1)).toBe(1);
});

test('Calculates', () => {
  expect(simpleCalc.divide(6, 2)).toBe(3);
});

test('Calculates', () => {
  expect(simpleCalc.multiply(2, 3)).toBe(6);
});