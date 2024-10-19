// enent handlers
 function myFunction(){
    console.log("someone call me")
 }

 function downfunction(){
    console.log("down key")
 }
 function pressfunction(){
    console.log("press key")
 }
 function upfunction(){
    console.log("up key")
 }


//  event listener

const box1= document.getElementById('box1')
box1.addEventListener("mousemove", (e)=>{
    // console.log(e)
    console.log(e.clientX, e.clientY)
})
 