// // Regular function
// function hello(){
//     console.log("Hello");
// }
// hello()




// //IIFE (Immediately Invoked Function Expression)
// (function(){
//     console.log("hello world");
// })()




// //arrow function
// const hello = ()=>{
//     console.log("hello world");
// }

// hello()





//first-class-citizens
// const add=(a,b)=>{
//     return a+b

// }

// const result=add //In result variable we are storing the add only refference
//  console.log(result(2,4)) 




// //first class citizen with callback
// function add(a, b) {
//     return a + b;
// }

// let sum = add;

// function average(a, b, fn) {
//     return fn(a, b) / 2;
// }

// let result = average(10, 20, sum);

// console.log(result);




// // Anonymous Functions
// const add = function () {   
//     console.log("hello")
// }

// add()








//recursive function

// function countDown(fromNumber) {
//     console.log(fromNumber);
//     // countDown(fromNumber-1);
// }

// countDown(3);


// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);







