class NumberChecker {

  isOdd(number) {
    if (typeof number !== 'number') {
      throw new Error('input must be a number');
    }
    return number % 2 !== 0;
  }
  
}

 