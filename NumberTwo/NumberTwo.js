class Numbers {
  constructor(){
    this.numbers = []
  }
  // create a new player and save it in the collection
  newNumber(num){
    let p = new Number(num)
    this.numbers.push(p)
    return p
  }
  get allNumbers(){
    return this.numbers
  }
}

let list = new Numbers()
list.newNumber("1")
list.newNumber("2")
list.newNumber("3")

let arr = list.allNumbers
let temp;

const sortedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const sortedNewArr = sortedArray(arr);
console.log(sortedNewArr);

const reversedArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {      
      newArr[i] = arr[arr.length - i - 1];
  }   
  return newArr;
}
console.log(reversedArray(arr));