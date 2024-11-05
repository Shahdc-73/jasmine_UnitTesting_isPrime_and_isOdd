class NumberChecker {

  isOdd(number) {
    if (typeof number !== 'number') {
      throw new Error('input must be a number');
    }
    return number % 2 !== 0;
  }
  
}


// const checker = new NumberChecker();
// console.log(checker.isOddOrEven(3)); // Output: 'odd'
// console.log(checker.isOddOrEven(4)); // Output: 'even'
