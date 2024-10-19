const arr = [1, 2, 34, 56, 78, 43, 56, 10, 59];

// find greater in array
function maximum(arr) {
  return Math.max(...arr);
}
console.log("The maximum number is", maximum(arr));



//total sum of element of array
function totalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log("Sum of all elements", totalSum(arr));






// count odd number in array
let count = 0;
let odd=[]
function CountOddNumber(arr) {
    for(let i =0; i<arr.length; i++){
        if(arr[i]%2 !==0){
            count +=1
            odd.push(arr[i]) // just seprate odd number

    }
}
}
CountOddNumber(arr);
console.log("Count of odd numbers", count)


