/* global expect, unique */

describe('unique(array)', () => {

  beforeEach(() => {
    expect(unique).to.be.a('function');
  });

  context('["foo", "bar", "baz", "qux", "bar", "qux", "corge", "baz"]', () => {

    it('returns ["foo", "bar", "baz", "qux", "corge"]', () => {
      const output = unique(['foo', 'bar', 'baz', 'qux', 'bar', 'qux', 'corge', 'baz']);
      expect(output).to.deep.equal(['foo', 'bar', 'baz', 'qux', 'corge']);
    });

  });

  context('[1, 3, 3, 2, 5, 2, 1, 4, 5, 5]', () => {

    it('returns [1, 3, 2, 5, 4]', () => {
      const output = unique([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
      expect(output).to.deep.equal([1, 3, 2, 5, 4]);
    });

  });

  context('[false, true, false, true]', () => {

    it('returns [false, true]', () => {
      const output = unique([false, true, false, true]);
      expect(output).to.deep.equal([false, true]);
    });

  });

  context('[]', () => {

    it('returns []', () => {
      const output = unique([]);
      expect(output).to.deep.equal([]);
    });

  });

});
