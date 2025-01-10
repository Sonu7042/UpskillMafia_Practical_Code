const container = document.querySelector(".main");

const sumDiv = document.querySelector("#sumDiv");
const subDiv = document.querySelector("#subDiv");
const multipleDiv = document.querySelector("#mulDiv");
const divideDiv = document.querySelector("#divideDiv");





let num1= parseInt(prompt("Enter num1: "))
let num2= parseInt(prompt("Enter num2: "))

console.log(typeof num1)


function sum(a, b) {
  let total = a + b;

  let p = document.createElement("p");
  p.textContent = total;

  sumDiv.append(p);
}




function sub(a, b) {
  let sub = (total = a - b);

  let p = document.createElement("p");
  p.textContent = sub;

  subDiv.append(p);
}




function divide(a, b) {
  let divi = a / b;

  let p = document.createElement("p");
  p.textContent = divi;

  divideDiv.append(p);
}



function multiple(a, b) {
  let mul = a * b;

  let p = document.createElement("p");
  p.textContent = mul;

  multipleDiv.append(p);
}



function main(a, b) {
  sum(a, b);
  sub(a, b);
  divide(a, b);
  multiple(a, b);
}

main(num1, num2);
