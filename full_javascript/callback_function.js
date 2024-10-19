
// advance function and callback function

// const hello=()=>{
//     console.log("Hello World")
// }

// hello()



//callback function

const calculate=(a,b, sum)=>{
     return sum(a,b)

}

const sum=(a, b)=>{
    return a+b
}


const result=calculate( 12,23, sum)
console.log(result)




// example of callback
const arr=[1,3,4,5,6,6]
arr.forEach((num, index)=>console.log("iterate",num, index))
