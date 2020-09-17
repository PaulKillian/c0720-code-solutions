/* global expect, intersection */

describe('intersection(first, second)', () => {

  beforeEach(() => {
    expect(intersection).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', () => {

    it('returns [2]', () => {
      const output = intersection([2, 1], [2, 3]);
      expect(output).to.deep.equal([2]);
    });

  });

  context('["html", "css", "javascript"] and ["php", "css", "sql"]', () => {

    it('returns ["css"]', () => {
      const output = intersection(
        ['html', 'css', 'javascript'],
        ['php', 'css', 'sql']
      );
      expect(output).to.deep.equal(['css']);
    });

  });

  context('["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]', () => {

    it('returns ["link", "the"]', () => {
      const output = intersection(
        ['a', 'link', 'to', 'the', 'past'],
        ['the', 'adventure', 'of', 'link']
      );
      expect(output).to.deep.equal(['link', 'the']);
    });

  });

});
