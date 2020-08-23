`use-strict`

/**
  Implement the following methods -
  Filter
  ForEach
  Map
  Using only for(), array and objects (without other js methods) 
  Find Bugs \ Debug Code
  Bug !!!!! 
 */

 // forEach
 const forEach = (arr, callback) => {
   for(let i = 0; i < arr.length; i++){
     callback(arr[i], i, arr);
   }
 };
//TEST
forEach([1,2,3,4,5], (currentNum, numIndex, srcArr) => console.log(currentNum, numIndex, srcArr));

//Filter
const filter = (arr, callback) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(callback(arr[i], i, arr)){
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
//TEST
console.log(filter([0, 1, 0, 1, 0, 0, 0], (currentNum, index, srcArr) => {currentNum === 0}));


//Map
const map = (arr, callback) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(callback(arr[i], i, arr));
  }
  return newArr;
};
//TEST
console.log(map([1,2,3,4,5,6], (currentNum) => currentNum + 1));