class Numbers {
  constructor(){
    this.numbers = []
  }

  newNumber(num){
    let p = new Number(num)
    this.numbers.push(p)
    return p
  }

  sorted(){
    let temp;
    for (let i = 0; i < this.numbers.length; i++) {
    for (let j = i + 1; j < this.numbers.length; j++) {
      if (this.numbers[i] > this.numbers[j]) {
        temp = this.numbers[i];
        this.numbers[i] = this.numbers[j];
        this.numbers[j] = temp;
      }
    }
  }
  return this.numbers;
  }

  reversed(){
      let newArr = [];
  for (let i = 0; i < this.numbers.length; i++) {      
      newArr[i] = this.numbers[this.numbers.length - i - 1];
  }   
  return newArr;
  }
  
}