/* global expect, zip */

describe('zip(first, second)', () => {

  beforeEach(() => {
    expect(zip).to.be.a('function');
  });

  context('["name", "course", "grade"] and ["Cody", "CSS", 9001]', () => {

    it('returns [["name", "Cody"], ["course", "CSS"], ["grade", 9001]]', () => {
      const output = zip(['name', 'course', 'grade'], ['Cody', 'CSS', 9001]);
      expect(output).to.deep.equal([['name', 'Cody'], ['course', 'CSS'], ['grade', 9001]]);
    });

  });

  context('["dog", "lion", "hawk", "tiger"] and ["cat", "lamb", "dove"]', () => {

    it('returns [["dog", "cat"], ["lion", "lamb"], ["hawk", "dove"]]', () => {
      const output = zip(
        ['dog', 'lion', 'hawk', 'tiger'],
        ['cat', 'lamb', 'dove']
      );
      expect(output).to.deep.equal([['dog', 'cat'], ['lion', 'lamb'], ['hawk', 'dove']]);
    });

  });

  context('[1, 3, 5] and [2, 4, 6, 8]', () => {

    it('returns [[1, 2], [3, 4], [5, 6]]', () => {
      const output = zip([1, 3, 5], [2, 4, 6, 8]);
      expect(output).to.deep.equal([[1, 2], [3, 4], [5, 6]]);
    });

  });

  context('["l", "e", "a", "r", "n", "i"] and ["n", "g", "f", "u", "z", "e"]', () => {

    it('returns [["l", "n"], ["e", "g"], ["a", "f"], ["r", "u"], ["n", "z"], ["i", "e"]]', () => {
      const output = zip(
        ['l', 'e', 'a', 'r', 'n', 'i'],
        ['n', 'g', 'f', 'u', 'z', 'e']
      );
      expect(output).to.deep.equal([['l', 'n'], ['e', 'g'], ['a', 'f'], ['r', 'u'], ['n', 'z'], ['i', 'e']]);
    });

  });

});
