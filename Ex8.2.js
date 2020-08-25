`use-strict`

////////////////////////////////////////////////////////////////////////////////
const squaed = (a) => a * a;
//TEST
//console.log(squaed(100));

//////////////////////////////////////////////////////////////////////////////////
const findPerimeter = (height , width) => (height * 2) + (width * 2);
//TEST
//console.log(findPerimeter(2, 9));

/////////////////////////////////////////////////////////////////////////////////
// What would be the output of following code?
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA;
// arrB[0]=42;
// console.log(arrA) // -> by ref : [42,1,2,3,4,5]

/////////////////////////////////////////////////////////////////////////////////
// What would be the output of following code?
// var arrA = [0,1,2,3,4,5];
// var arrB = arrA.slice(); // immutable = new copy
// arrB[0]=42;
// console.log(arrA) // -> [0,1,2,3,4,5]

/////////////////////////////////////////////////////////////////////////////////
// What would be the output of following code?
// var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
// var arrB = arrA; // by ref -> same memo address
// arrB[0].prop1=42;
// console.log(arrA); //[{prop1: 42},  {someProp: "also value of array A!"}, 3,4,5]

// /////////////////////////////////////////////////////////////////////////////////
// //What would be the output of following code?
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice(); // immutable = new copy -> shallow copy
arrB[0].prop1=42; // obj = same ref
arrB[3] = 20; // number - new copy
console.log(arrA); // [{prop1:42}, {someProp: "also value of array A!"},3,4,5]

