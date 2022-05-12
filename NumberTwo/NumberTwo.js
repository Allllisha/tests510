class Numbers {
  constructor(arrayOfNumber) {
    let temp;
    for (let i = 0; i < arrayOfNumber.length; i++) {
      for (let j = i + 1; j < arrayOfNumber.length; j++) {
        if (arrayOfNumber[i] > arrayOfNumber[j]) {
          temp = arrayOfNumber[i];
          arrayOfNumber[i] = arrayOfNumber[j];
          arrayOfNumber[j] = temp;
        }
      }
    }
    return this.numbers = arrayOfNumber
  }

  sorted() {
    return this.numbers;
  }

  reversed() {
    let newArr = [];
    for (let i = 0; i < this.numbers.length; i++) {
      newArr[i] = this.numbers[this.numbers.length - i - 1];
    }
     return newArr;
  }
}

