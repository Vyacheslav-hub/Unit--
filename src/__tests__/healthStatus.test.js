import getHealthStatus from '../healthStatus';

test('should return "green" when health is above 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('green');
});

test('should return "green" when health is exactly 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 50 });
  expect(result).toBe('green');
});

test('should return "yellow" when health is between 15 and 49', () => {
  const result = getHealthStatus({ name: 'Маг', health: 30 });
  expect(result).toBe('yellow');
});

test('should return "yellow" when health is exactly 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 15 });
  expect(result).toBe('yellow');
});

test('should return "red" when health is below 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('red');
});
