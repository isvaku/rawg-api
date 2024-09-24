import sum from './utils/sum.js';
import { test, expect } from 'vitest';

test('sum', () => {
  expect(sum(1, 2)).toBe(3);
});
