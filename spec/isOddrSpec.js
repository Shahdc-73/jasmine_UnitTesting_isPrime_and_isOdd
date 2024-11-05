describe('NumberChecker', function() {
  let numberChecker;

  beforeEach(function() {
    numberChecker = new NumberChecker();
  });

  it('should return true for an odd number', function() {
    expect(numberChecker.isOdd(3)).toBe(true);
  });

  it('should return false for an even number', function() {
    expect(numberChecker.isOdd(4)).toBe(false);
  });

  it('should throw an error if input is not a number', function() {
    expect(function() {
      numberChecker.isOdd('not a number');
    }).toThrowError('input must be a number');
  });
});
