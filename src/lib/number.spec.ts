import { double, power } from '..';

describe('Number', () => {
  it('should double number', () => {
    expect(double(2)).toEqual(4);
  });

  it('should compute power', () => {
    expect(power(2, 4)).toEqual(16);
  });
});
