//filter
const dummyArray = [
  {
    id: 123,
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    role: "Student",
  },
  {
    id: 22,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 34,
    role: "Teacher",
  },
  {
    id: 352,
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 22,
    role: "Student",
  },
  {
    id: 48,
    name: "Emily Davis",
    email: "emily@example.com",
    age: 29,
    role: "Teacher",
  },
];


 const newArray=dummyArray.filter((value)=>{
    if(value.id%2===0) return true
    else return false
})

console.log(newArray)


// map method
const newmapArray=dummyArray.map((value)=>{
    return `<li>${value.name}</li>`

})

console.log(newmapArray)


const div= document.getElementById("container")
div.innerHTML=`<ul>${newmapArray.join("")}</ul>`
