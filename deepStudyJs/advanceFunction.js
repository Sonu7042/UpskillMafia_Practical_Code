

//pratice of call function in advance

//this simple function
// function add(x, y) {
//     return x + y;
//   }
  
//   let result = add.call(this, 10,20);
//   console.log(result)





// var greeting = 'Hi';

// var messenger = {
//     greeting: 'Hello'
// }

// function say(name) {
//     console.log(this.greeting + ' ' + name);
// }

// say.call(this,'John');




// function Box(height, width) {
//     this.height = height;
//     this.width = width;
//   }
  
//   function Widget(height, width, color) {
//     Box.call(this, height, width);
//     this.color = color;
//   }
  
//   let widget = new Widget('red', 100, 200);
  
//   console.log(widget);




// function isOdd(number) {
//     return number % 2;
//   }
  
//   function getOddNumbers() {
    
//     const newarr= Array.prototype.filter.call(arguments, isOdd);
//     console.log(newarr)
//   }
  
// getOddNumbers(10, 1, 3, 4, 8, 9);




//Apply function in advance


// const person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }

// function greet(greeting, message) {
//     return `${greeting} ${this.firstName}. ${message}`;
// }

// let result = greet.apply(person, ['Hello', 'How are you?']);

// console.log(result);


// let arr = [1, 2, 3];
// let numbers = [4, 5, 6];

// arr.push.apply(arr, numbers);

// console.log(arr); 


//bind function
// let person = {
//     name: 'John Doe',
//     getName: function() {
//         console.log(this.name);
//     }
// };

// let f = person.getName.bind(person);
// setTimeout(f, 1000);




let arr = [10, 'Hi', null, undefined, 20];
// let sum=0
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         sum += arr[i];
       

//     }
    
// }

// console.log(sum)

// let total=0
// arr.forEach(element => {
//     if(typeof element === "number"){
//         total += element
//     }

    
// });
// console.log(total)



let a=[2,4,5,6]
const num=a.reduce((accu, num)=>{accu + num},0)
console.log(num)



