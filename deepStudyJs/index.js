// function getuser(a=5, b=6){
//     return a+b

// }

// // getuser(2,3)
// console.log(getuser(2,4))

// const getuser=(greet)=>greet

// console.log(getuser("good morning"))

// let sum = (a, b) => {
//   console.log(a + b);
//   return
//   console.log("hello") // it will not excute
// };

// console.log(sum(2, 3))

// //call back function
// function greet(grt, username) {
//   console.log("hello", grt, username());
// }

// greet("good morning", username);

// function username() {
//   return "john";
// }

// function calculater(a,b,call){
//      return call(a,b)

// }

// calculater()

// function sum(a,b){
//     return a+b
// }
// function minus(a,b){
//     return a+b
// }

// function div(a,b){
//     return a/b
// }

// //currying function
// function a(){
//     console.log("hello")
//     return function b(){
//         console.log("good morning")
//         return function d(){
//             return "jhon"
//         }
//     }

// }
// const c=a()
// const f=c()
// f()
// // console.log(c)

//IIFE immediate invoke function
// (function a(){
//     console.log("hello")
// })()

// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }

// let copyObj=employee

// copyObj.ename= "John"

// console.log(employee);

// let employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }

// console.log(JSON.stringify(employee))

// let deepCopy= employee
// deepCopy.eaddress="delhi"
// console.log(deepCopy)

// let deepCopy2= JSON.parse(JSON.stringify(employee))

// deepCopy2.ename="demo"

// console.log(deepCopy)

// console.log("employee", employee)

// const personObject = { name: 'John', age: 30, occupation: 'Developer'}
// const orgObject = { company: 'XYZ Corp'};
// const carObject = { name: 'Toyota', color:"red"};
// const staff = Object.assign({}, orgObject, personObject, carObject);

// console.log(staff)

// Define a parent object
// const animal = {
//     eat: function () {
//       console.log("This animal eats food.");
//     },
//   };

//   // Define a child object
//   const dog = {
//     bark: function () {
//       console.log("Woof! Woof!");
//     },
//   };

//   // Set 'animal' as the prototype of 'dog'
//   Object.setPrototypeOf(animal, dog );

//   // Access methods from both objects
//   animal.bark(); // Output: "Woof! Woof!"
//   animal.eat();  // Output: "This animal eats food."

// const car = {
//   name: "car",
//   start() {
//     console.log("Start the " + this.name);
//   },

//   speedUp() {
//     console.log("Speed up the " + this.name);
//   },

//   stop() {
//     console.log("Stop the " + this.name);
//   },
// };


// const tain = {
//   name: "train",
// };


// car.start.call(tain)
// car.start()




// function isOdd(number) {
//     console.log(number)
//     return number % 2;
//   }
  
//   function getOddNumbers() {
//     return Array.prototype.filter.call(arguments, isOdd);
    
//     // return String.prototype.trim.call(a);
//     }
// const result=getOddNumbers(10, 1, 3, 4, 8, 9);
// // const result=getOddNumbers("        demo         ");
// console.log( result);





// const computer = {
//     name: 'MacBook',
//     isOn: false,
    
//     turnOn() {
//         this.isOn = true;
//         return `The ${this.name} is On`;
//     },

//     turnOff() {
//         this.isOn = false;
//         return `The ${this.name} is Off`;
//     }
// };


// const server = {
//     name: 'Dell PowerEdge T30',
//     isOn: false
// };


// let result = computer.turnOn.apply(server);

// console.log(result);




// function greet(message, punctuation) {
//     console.log(`${message}, my name is ${this.name}${punctuation}`);
//   }
  
//   const person = {
//     name: "John"
//   };
  
//   // Using apply() to invoke greet with `person` as the `this` value
//   greet.call(person, "Hello", "demo"); 
//   // Output: "Hello, my name is John!"
  

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};


let flyer = {
    name: 'Flyer',
    fly: function(name) {
        console.log(this.name + ' flies at ' + name + ' mph.');
    }
};


let run = runner.run.bind(flyer, 20);
run();
