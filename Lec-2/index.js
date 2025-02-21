// console.log("Chaliye Suru karte hain");
// //Object Create

// let rectangle = {
//     length:1,
//     bredth:2,

//     draw: function() {
//         console.log("This will draw rectangle");
//     }
// };

// Object Creation

// 1.Factory Function

// function createRectangle(len,bre){

//     return rectangle = {
//         length:len,
//         breadth:bre,

//         draw(){
//             console.log('Drawing rectangle');
//         }
//     };
// }

// let obj1 = createRectangle(5,3);
// l et obj2 = createRectangle(7,9);
// let obj3 = createRectangle(6,3);

// // 2.Constructor Function

// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw = function(){
//         console.log('Drawing');
//     }
// }

// //Object creation using constructor

// let rectangleObject = new Rectangle();
// rectangleObject.color = 'Yellow';
// console.log(rectangleObject)
// delete rectangleObject.color;
// console.log(rectangleObject);
// rectangleObject.color = 'Red';
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length','breadth',
//     `this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log('Drawing');
//         }`
// );

// //object creation using Rectangle1
// let rect = new Rectangle1(9,4);

// console.log(rect.length);
// console.log(rect);


// // Value Type or Primitives
// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


// // Objects or Reference types
// let a = { value:10 };
// let b = a;

// a.value ++;
// console.log(a);
// console.log(b);


// let a = 10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// // for-in loop

let rectangle = {
    length:2,
    breadth:4
};
// for(let key in rectangle){
//     console.log(key,rectangle[key])
// }

// // for-of loop 

// for(let key of Object.entries(rectangle)){
//     console.log(key)
// }

// // properties or keys is present or not in an object ?
// if('color' in rectangle){
//     console.log('Present');
// }
// else {
//     console.log('Absent')
// }


// // Object Cloning 
let src = {
    a:10,
    b:20,
    c:30
}
// // 1.Iteration

// let dest = {};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest)
// src.a++;
// console.log(src);

// // 2. Using 'assign' keyword
// dest = Object.assign({},src);

// // 3. Using Spread
let dest = {...src};
console.log(dest);
