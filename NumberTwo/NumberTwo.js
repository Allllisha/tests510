let arr = new Array('1', '2', '3', '4', '5');
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