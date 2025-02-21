//Insertion 
// let numbers = [1,4,5,7];

// // At End
// numbers.push(9);
// console.log(numbers);

// // At Begining
// numbers.unshift(0);
// console.log(numbers);

// //At Middle
// numbers.splice(1,0,'a','b');
// console.log(numbers);

//Searching

// console.log(numbers.indexOf(10));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1){
//     console.log("Present")
// }

// console.log(numbers.includes(4));

// // index 2 se kahi 4 h
// console.log(numbers.indexOf(4,2)); 

// let courses = [ 
//     {no:1 , naam:'Love'},
//     {no:2 , naam:'Saurav'}
// ] 
// // array of Objects

// console.log(courses);

// Searching in Reference type or Object type

// console.log(courses.indexOf({np:2,naam:'Saurav'})); // wrong tarika 
// console.log(courses.includes({no:1,naam:'Love'})); //wrong tarika again

// Right Tarika Here ---> Callback Function

// let course = courses.find(course => course.naam === 'Love');
// // function(course){
// //     return course.nam ==='Love'
// // }
// console.log(course);


// Removing Element 

// let numbers =[1,2,3,4,5,6,7];
// // End
// numbers.pop();
// console.log(numbers);
// //Begining
// numbers.shift();
// console.log(numbers);
// //Middle
// numbers.splice(0,2); // 2- 0 se 2 element urr jayega
// console.log(numbers);


// let numbers =[1,2,3,4,5,6,7];
// //Empty an array
 
// //Method-1
// numbers.length=0;

// //Method-2
// numbers.splice(0,numbers.length);
// console.log(numbers)

// //Method-3
// while(numbers.length>0){
//     numbers.pop();
// }
// console.log(numbers)


// //<--Combining and Slicing Arrays-->
// let arr1=[1,2,3];
// let arr2=[4,5,6];
//  //Combining
// let combined = arr1.concat(arr2);
// console.log(combined);

//   //Slicing a part of array
// let sliced = combined.slice(2,4);
// console.log(sliced);

// // slice from given index
// let sliced2 = combined.slice(2);
// console.log(sliced2);

// //Copy Original Array
// let newArr = combined.slice();
// console.log(newArr);

// //Combining through spread operator

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,...second];
// console.log(combined);

// //copy kaise karu
// let another = [...combined];
// console.log(another);

//Iterating an Array:--->
let arr = [10,20,30,40,50];

// M-1
// for(let value of arr){
//     console.log(value);
// }

//M-2
// arr.forEach(number=>console.log(number));

// let number = [10,20,30,40,50];
// const joined = number.join("-"); // jis basis pe join karna h wo likhna prta h, Yhan '-' basis pe- 10-20-30-40-50
// console.log(joined);

// let message = 'This is my First Message';
// let parts = message.split(' ');

// console.log(parts);
// let joined = parts.join(' ');
// console.log(joined);

// //sorting
// let number = [10,20,70,40,50];
// let sorted = number.sort();
// console.log(sorted);
// let reversed = number.reverse();
// console.log(reversed);

// //Filtering Array--->
// let numbers = [10,-20,-70,40,50];
// let filtered = numbers.filter(value=>value>=0);
// console.log(filtered);


// let numbers = [10,20,70,40,50];
// console.log(numbers);

// let items = numbers.map(function(value){
//     return 'Student no '+ value;
// })

//above in arrow fxn

// let items = numbers.map(value=>'Student no '+ value);
// console.log(items);

// Mapping with Object : -->
let numbers = [1,2,-1,-6];
let filtered = numbers.filter(value => value >= 0);
let items = filtered.map(num => {value:num}); 
console.log(items);

// //Chanining above
// let items = numbers
// .filter(value => value >= 0)
// .map(num => {value:num}); 







