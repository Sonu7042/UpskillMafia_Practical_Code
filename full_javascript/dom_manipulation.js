// const box1= document.getElementById("box1")
// box1.innerHTML="hello world"

// box1.classList.add('rounded')

//selecting all element by className
// const boxes= document.getElementsByClassName("box")

// for (let i=0; i<boxes.length; i++){
//     boxes[i].classList.add('rounded')

// }

// const id=document.getElementById("box2")
// console.log(id)

// const tag= document.getElementsByTagName("div")
// console.log(tag)

// const clases= document.getElementsByClassName("box")
// console.log(clases)

// const random= document.querySelector(".container .random")
// console.log(random)





const p = document.createElement("p");
p.innerText = "this is paragarph";
p.classList.add("box")

const container = document.getElementById("container1");
console.log(container)
container.appendChild(p);
