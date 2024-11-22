// //array
// let arr= [1,2,3,4,5]
//  console.log(arr.length)

// let newArray= new Array(2,5)
// console.log(newArray)

// //array method
// let arr= [2,4,6,7,8]
// // arr.push(10)
// // arr.pop()
// // arr.shift()
// // arr.unshift(9)
// // arr.splice(1,2)

// console.log(arr)

// //string method
// let str="sonu"

// console.log(str.charAt(1))
// console.log(str.toUpperCase())
// console.log(str.toLocaleLowerCase())
// console.log(str.split())
// console.log(str.substring(1,3))

// let obj= {name:"sonu", age:19}
// console.log(obj.hasOwnProperty("name"))
// console.log(obj.toString())
// console.log(obj.valueOf().name)

//math  method
// let num=9
// console.log(Math.sqrt(num))
// console.log(Math.floor(Math.random() * 10))

//about this  keyword
// const obj={
//   name:"sonu",
//   age:19,
//   display:function(){
//     // console.log(this.name)
//     return  this.name

//   }
// }

// // obj.display()
// console.log(obj.display())

//callback function
function goodMorning(name,  callback){
  console.log("good morning", name)
  callback(name)
}

function goodEvening(name){
  console.log("good evening", name)
}


goodMorning("sonu", goodEvening)

// functions
// add()

// function  add(){console.log("hello")}

// //function expression

// let call= function(){
//     console.log("hello sonu")
// }

//difference between let and var

// console.log(b)

// let a="sonu"
// var b="raju"



// // closure
// function createCount() {
//   let count = 0;

//   const add = function (){
//     count++;
//     return count;
//   };
// }

// const counter = createCount();
// console.log(counter.add());
// // console.log(counter());
// // console.log(counter());



// //type coercion

// let a = 4 / "2"
// console.log(a)
// console.log(typeof a)


//invoke function
(function name(){
    console.log("hello")
})()


        