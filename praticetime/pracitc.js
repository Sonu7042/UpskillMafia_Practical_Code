// find the greater number 


//method 1
let arr = [12, 45, 98, 65, 78, 14]; 
// let newArray = arr.sort(); 
// console.log(newArray[newArray.length-1]);


//method 2
// let greatest=[0]
// for(let i = 1; i<arr.length; i++){
//   if(arr[i]>greatest){
//     greatest=arr[i]
//   }
 
// }
// console.log(greatest)



// method3
// console.log(Math.max(...arr))








//this class
class Parent {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  nameFunction() {
    return `This user name is ${this.username}`;
  }
}

const result = new Parent("sonu", "121324");


class Child extends Parent {
  constructor(username, password, address) {
    super(username, password); 
    this.address = address; 
  }

  detail() {
    return `This is the detail of function: address ${this.address} and username ${this.username}`;
  }
}

const newChild = new Child("raju", "121324", "Pandav nagar");
console.log(newChild.detail());
console.log(result.nameFunction());
console.log(newChild.nameFunction())
console.log(newChild instanceof Child)





