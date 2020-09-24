/* global expect, equal */

describe('equal(first, second)', () => {

  beforeEach(() => {
    expect(equal).to.be.a('function');
  });

  context('["foo", "bar", "baz"] and ["foo", "bar", "baz"]', () => {

    it('returns true', () => {
      const output = equal(
        ['foo', 'bar', 'baz'],
        ['foo', 'bar', 'baz']
      );
      expect(output).to.equal(true);
    });

  });

  context('["foo", "bar", "baz"] and ["foo", "bar", "qux"]', () => {

    it('returns false', () => {
      const output = equal(
        ['foo', 'bar', 'baz'],
        ['foo', 'bar', 'qux']
      );
      expect(output).to.equal(false);
    });

  });

  context('[1, 2, 3, 4, 5] and [1, 2, 3, 4, 5]', () => {

    it('returns true', () => {
      const output = equal(
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
      );
      expect(output).to.equal(true);
    });

  });

  context('[1, 2, 3, 4, 5] and [1, 2, 3, 3, 5]', () => {

    it('returns false', () => {
      const output = equal(
        [1, 2, 3, 4, 5],
        [1, 2, 3, 3, 5]
      );
      expect(output).to.equal(false);
    });

  });

  context('[false, true, false, true] and [false, true, false, true]', () => {

    it('returns true', () => {
      const output = equal(
        [false, true, false, true],
        [false, true, false, true]
      );
      expect(output).to.equal(true);
    });

  });

  context('[false, true, false, true] and [false, true, false, true]', () => {

    it('returns false', () => {
      const output = equal(
        [false, true, false, true],
        [true, false, true, false]
      );
      expect(output).to.equal(false);
    });

  });

  context('[] and []', () => {

    it('returns true', () => {
      const output = equal(
        [false, true, false, true],
        [true, false, true, false]
      );
      expect(output).to.equal(false);
    });

  });

});
