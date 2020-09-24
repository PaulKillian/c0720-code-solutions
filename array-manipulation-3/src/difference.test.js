/* global expect, difference */

describe('difference(first, second)', () => {

  beforeEach(() => {
    expect(difference).to.be.a('function');
  });

  context('[2, 1] and [2, 3]', () => {

    it('returns [1, 3]', () => {
      const output = difference([2, 1], [2, 3]);
      expect(output).to.deep.equal([1, 3]);
    });

  });

  context('["html", "css", "javascript"] and ["php", "css", "sql"]', () => {

    it('returns ["html", "javascript", "php", "sql"]', () => {
      const output = difference(
        ['html', 'css', 'javascript'],
        ['php', 'css', 'sql']
      );
      expect(output).to.deep.equal([
        'html', 'javascript', 'php', 'sql'
      ]);
    });

  });

  context('["a", "link", "to", "the", "past"] and ["the", "adventure", "of", "link"]', () => {

    it('returns ["a", "to", "past", "adventure", "of"]', () => {
      const output = difference(
        ['a', 'link', 'to', 'the', 'past'],
        ['the', 'adventure', 'of', 'link']
      );
      expect(output).to.deep.equal(['a', 'to', 'past', 'adventure', 'of']);
    });

  });

});
