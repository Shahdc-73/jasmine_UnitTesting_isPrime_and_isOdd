class PrimeChecker {

  isPrime(number) {
    if (typeof number !== 'number') {
      throw new Error('input must be a number');
    }
    if (number <= 1) return false;
    if (number === 2) return true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
}
