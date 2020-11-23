import { sum } from './sum';

describe('sum', () => {
  it('returns sum of params', () => {
    expect(sum(1, 2)).toBe(3);
  });
});