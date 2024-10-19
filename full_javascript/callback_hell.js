//asynchoronus programming
// console.log("hello start");

// setTimeout(()=>{
//     console.log("it will excute after 3")

// }, 3000)

// console.log("hello end");





//example 
const getChess = (callback) => {
  setTimeout(() => {
    const chess = "😊";
    callback(chess);
  }, 2000);
};

getChess((chess) => console.log(chess));
