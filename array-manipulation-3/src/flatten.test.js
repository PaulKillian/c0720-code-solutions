/* global expect, banMethods, flatten */

describe('flatten(array)', () => {

  beforeEach(() => {
    expect(flatten).to.be.a('function');
    banMethods(flatten, 'flat');
  });

  context('[["foo", "bar"], ["baz", "qux"]]', () => {

    it('returns ["foo", "bar", "baz", "qux"]', () => {
      const input = [['foo', 'bar'], ['baz', 'qux']];
      const output = flatten(input);
      expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux']);
    });

  });

  context('[[1], [2], 3, 4, [5]]', () => {

    it('returns [1, 2, 3, 4, 5]', () => {
      const input = [[1], [2], 3, 4, [5]];
      const output = flatten(input);
      expect(output).to.deep.equal([1, 2, 3, 4, 5]);
    });

  });

  context('[false, [true, [false]], [true]]', () => {

    it('returns [false, true, [false], true]', () => {
      const input = [false, [true, [false]], [true]];
      const output = flatten(input);
      expect(output).to.deep.equal([false, true, [false], true]);
    });

  });

});
