describe('PrimeChecker', function() {
  let primeChecker;

  beforeEach(function() {
    primeChecker = new PrimeChecker();
  });

  it('should return true for a prime number', function() {
    expect(primeChecker.isPrime(7)).toBe(true);
  });

  it('should return false for a non-prime number', function() {
    expect(primeChecker.isPrime(4)).toBe(false);
  });

  it('should return false for numbers less than 2', function() {
    expect(primeChecker.isPrime(1)).toBe(false);
    expect(primeChecker.isPrime(0)).toBe(false);
    expect(primeChecker.isPrime(-3)).toBe(false);
  });
});
