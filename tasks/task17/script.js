const data = [
  {
    id: 1,
    name: "Cotton Shirt",
    price: 300,
    img: "https://m.media-amazon.com/images/I/71+LK6XTuFL._AC_UY1100_.jpg",
  },
  {
    id: 2,
    name: "Jean shirts",
    price: 800,
    img: "https://googogaaga.com/pub/media/catalog/product/cache/ed00e98b53c365257625fbc922a631b0/i/m/img-7252_1_.jpg",
  },
  {
    id: 3,
    name: "Shoe",
    price: 1000,
    img: "https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg",
  },
  {
    id: 4,
    name: "Leather Belt",
    price: 650,
    img: "https://m.media-amazon.com/images/I/417+WTiVDaL._AC_UY1100_.jpg",
  },
];

const skipbtn = document.getElementById("skipbtn");
const addbtn = document.getElementById("addbtn");
const imgSection = document.getElementById("imgSection");
const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const displayItem = document.getElementById("displayItem");
const bookBtn = document.getElementById("bookbtn");
const belowbtn2text = document.getElementById("belowbtn2text");



const inputName=document.getElementById("inputName")
const inputEmail=document.getElementById("inputEmail")
const inputNumber=document.getElementById("inputNumber")


let a = 1;
let totalPrice = 0;
const newArray = [];
let currentitem = 1;

function displayItemOnScreen(item) {
  imgSection.innerHTML = ""; 
  const img = document.createElement("img");
  img.src = item.img;
  imgSection.appendChild(img);

  itemName.textContent = item.name;
  itemPrice.textContent = `₹ ${item.price}`;
}



function initializeFirstItem() {
  currentitem = 1; 
  const firstItem = data.find((item) => item.id === currentitem);
  if (firstItem) {
    displayItemOnScreen(firstItem);
  }
}

initializeFirstItem();




function displayFunction() {
  displayItem.innerHTML = ""; 
  totalPrice = 0; 

  newArray.map((item,index) => {
    totalPrice += item.price;

    const divwrapper = document.createElement("div");
    divwrapper.classList.add("inside-div");

    const p1 = document.createElement("p");
    p1.classList.add("p1");
    p1.textContent = `${index+1}`;

    const p2 = document.createElement("p");
    p2.classList.add("p2");
    p2.textContent = `${item.name}`;

    const p3 = document.createElement("p");
    p3.classList.add("p3");
    p3.textContent = `₹ ${item.price}`;

    divwrapper.append(p1, p2, p3);
    displayItem.appendChild(divwrapper);
  });

 
  const totalAmount = document.getElementById("totalPrice");
  totalAmount.textContent = `₹ ${totalPrice}`;
}




function addButton() {

  const selectedItem = data.find((item) => item.id === currentitem);

  newArray.push(selectedItem);

  
  displayFunction();

  
  a = a >= data.length ? 1 : a + 1;
  currentitem = a;

  const nextItem = data.find((item) => item.id === currentitem);

  if (nextItem) {
    displayItemOnScreen(nextItem);
  }

  
  if (newArray.length > 0) {
    bookBtn.style.backgroundColor = "blue";
    bookBtn.style.color = "white";
    belowbtn2text.innerHTML = "";
  }
}


addbtn.addEventListener("click", addButton);


function Skipfunction() {
  a = a >= data.length ? 1 : a + 1;
  currentitem = a; 

  const selectedItem = data.find((item) => item.id === currentitem);
  if (selectedItem) {
    displayItemOnScreen(selectedItem); 
  }
}


skipbtn.addEventListener("click", Skipfunction);

bookBtn.addEventListener("click", () => {
 
  if (newArray.length > 0) {
    belowbtn2text.style.color="green"
    belowbtn2text.textContent = "Thank for contacting, we will get back to you soon";
  //  displayItem.innerHTML=""
    
    setTimeout(() => {
      belowbtn2text.innerHTML = ""; 
      location.reload()
    }, 2000);


 
  } 
  else {
    belowbtn2text.textContent = "Add items to the cart to book.";
  }
});



//for input bar 
inputName.addEventListener("click", () => {
  inputName.classList.add("active");  
  inputEmail.classList.add("active"); 
  inputNumber.classList.add("active"); 
});
