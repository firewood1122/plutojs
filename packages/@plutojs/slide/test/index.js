import { reverse } from '../index';

describe('第一个测试用例', () => {
  beforeEach(() => {
  });

  afterEach(() => {
  });

  it('reverse word', () => {
    expect('BBB').toBe(reverse('AAA'));
    expect('DCBA').toBe(reverse('ABCD'));
  });
});
