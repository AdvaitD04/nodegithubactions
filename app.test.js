// app.test.js
const add = require('./app');

test('should add two numbers correctly', () => {
  expect(add(3, 2)).toBe(5);
});