let P = 1000; 
let r = 5; 
let n = 4; 
let t = 3; 

r = r / 100; 

// formula
let A = P * Math.pow((1 + r / n), n * t);

// Calculate compound interest (CI)
let compoundInterest = A - P;

// Display the result with rounding
console.log(`The compound interest after ${t} years is: ${compoundInterest}`);


