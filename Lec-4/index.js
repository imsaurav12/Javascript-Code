console.log("Lecture-4")



// // function call can be also be performend above function declaration.--->Hoisting

// run();
// function run(){
//     console.log("I am Running");
// }

// // stand(); --> Hoisting only work with function declaration method not with function assignment
// //Function Assignment

// // 1.Named Function Assignment
// let stand = function walk(){
//     console.log("I am Walking");
// }
// stand();


// //2.Anonymous Function Assignment
// let stand2 = function (){
//     console.log("I am Walking");
// }


// function sum(a,b){
//     console.log(arguments)
//     return a+b;
// }

// // console.log(sum(1,2));                  // ---> 3
// // console.log(sum(1));                   // NaN
// // console.log(sum());                   // NaN
// // console.log(sum(1,2,3,4,5));         //  3

// sum(1,2,3,4,5);         //---It creates object and map it

// Making this function Dynamic

// function sum(a,b){
//     total = 0;
//     for(let value of arguments)
//         total += value
//     return total;
// }
// // Now sum(x1,x2,x3....) can take any number of parameter and sum it.
// console.log(sum(1,3,4));

// // REST OPERATOR ...

// function sum(num,value,...args){  // we can't write after ...args(rest parameter)
//     console.log(args)
// }
// sum(1,2,3,4,5);

// Default Parameter

// function interest(p,r,t){
//     return 0.01*p*r*t;
// }
// console.log(interest(1000,10,5)); 

// //agar koi parameter nhi pass kr rhe to default parameter kaam ayega

// // for that we do 
// function interest(p,r=6,t=10){
//     return 0.01*p*r*t;
// }
// console.log(interest(100));  // [p=100,r=6,t=10]

//GETTERS AND SETTERS
//GETTER --> ACCESS PROPERTIES
//SETTER --> CHANGE OR MUTATE

// let person={
//     fname:'Saurav',
//     lname:'Raj'
// };
// console.log(`${person.fname} ${person.lname}`)

// function fullName(){
//     return `${person.fname} ${person.lname}`; // Read only function
// }

//for getter and setter go to object and crete getter and setter there in project

let person={
    fname:'Saurav',
    lname:'Raj',
    get fullName(){
        return `${person.fname} ${person.lname}`
    },
    set fullName(value){
        if(typeof value !==String){
            throw new Error('You have not sent String');
        }
        let parts = value.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
}; 

try{
    person.fullName = true;
}
catch(e){
    alert(e);
}

console.log(person.fullName);

 






