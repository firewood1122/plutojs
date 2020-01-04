import { reverse } from '../index';

describe('第一个测试用例', function () {
  beforeEach(function () {
  });

  afterEach(function () {
  });

  it('reverse word', function () {
    expect('BBB').toBe(reverse('AAA'));
    expect('DCBA').toBe(reverse('ABCD'));
  });
});
