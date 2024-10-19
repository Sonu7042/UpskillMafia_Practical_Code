//promise

// const ticket = new Promise((resolve, reject) => {
//   const isBoard = true;
//   if (isBoard) {
//     resolve("you are not in flight");
//   } else {
//     reject("Your flight is cancelled");
//   }
// });


// ticket.then((data)=>{
//     console.log("wohoo",data)
// })
// .catch((data)=>{
//     console.log("Oh no", data)

// })



// example of chess
function getChess(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const chess="😂"
            resolve(chess)
            
        }, 2000);
    })
}


function makeDough(chess){   
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dough= chess+ "🎂"
            resolve(dough)
            
        }, 2000);
    })
}


function bakePizza(dough){   
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const pizza= dough+ "🥟"
            resolve(pizza)
            // reject("bad pizza")
            
        }, 2000);
    })
}

// getChess()
// .then((chess)=>{
//     console.log("here is chess", chess)
//     return makeDough(chess)
// })
// .then((dough)=>{
//     console.log("here is dough", dough)
//     return bakePizza(dough)

// })
// .then((pizza)=>{
//     console.log("here is pizza", pizza)

// })
// .catch((data)=>{
//     console.log("error occured", data)

// })



// another way using async

async function orderPizza(){
    const chess= await getChess()
    console.log("here is chess", chess)
    const dough= await makeDough(chess)
    console.log("here is dough", dough)
    const pizza= await bakePizza(dough)
    console.log("here is pizza", pizza)
}

orderPizza()



 
