//Reducing an Array

let arr = [1,2,3];
// total = 0;
// for(let value of arr){
//     total += value;
// }
// console.log(total); // This is basic method, Doing using reduce() method

let sumOfArr = arr.reduce((accumulator,currentValue)=>accumulator + currentValue,0);
console.log(sumOfArr);