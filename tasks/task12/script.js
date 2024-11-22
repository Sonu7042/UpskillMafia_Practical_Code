
const number = 153;


console.log("Ex - Number", number)

//sum of N numbers
function sumOfFirstNNumbers(n) {
  let sum = (n * (n + 1)) / 2;
  console.log(`Sum of first n ${n} numbers is: ${sum}`);
}



//table
let table=[]
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    table.push(n*i)
    // console.log(`${n} x ${i} = ${n * i}`);
  }
  console.log("table",table.join(", "))
} 
 

//sum of digit of 'n'
function sumOfDigits(n) {
  let sum = 0;
  let numStr = n.toString();

  for (let char of numStr) {
    sum += parseInt(char);
  }

  console.log(`Sum of digits of ${n} is: ${sum}`);
}



// ArmStrong checker
function isArmstrong(n) {
  let numStr = n.toString();
  let sum = 0;

  for (let char of numStr) {
    sum += Math.pow(parseInt(char), 3);
  }

  if (sum === n) {
    console.log(`Is it an Armstrong number?  Yes`);

  } else {
    console.log(`Is it an Armstrong number?  No`);

  }
}



// prime checker
function CheckPrime(n) {
  let result = "";
  if (n <= 1) {
    console.log(number, "is not a prime number");
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        result = `${number} is not a prime number`;
        break;
      } else {
        result = `${number} is a prime number`;
      }
    }
    console.log(result);
  }
}




// All factors of n
function printFactors(n) {
  let factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  console.log(`Factors of ${n} are: ${factors.join(", ")}`);
}



function performOperations(n) {
  sumOfFirstNNumbers(n);
  printTable(n);
  sumOfDigits(n);
  isArmstrong(n);
  CheckPrime(n);
  printFactors(n);
  
}


performOperations(number);

