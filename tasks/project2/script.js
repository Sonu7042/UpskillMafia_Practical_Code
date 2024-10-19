const bookToday = document.getElementById("bookToday");
const displayItems = document.getElementById("listItems");
const displayItem = document.getElementById("displayItem");

const inputName = document.getElementById("inputName");
const belowbtn2text = document.getElementById("belowbtn2text");

const bookbtn = document.getElementById("bookbtn");

let totalPrice = 0;

const services = [
  { name: "Website Design", price: 500 },
  { name: "SEO Optimization", price: 300 },
  { name: "Graphic Design", price: 200 },
  { name: "Social Media Marketing", price: 400 },
  { name: "Content Writing", price: 150 },
  { name: "App Development", price: 1000 },
  { name: "Web Hosting", price: 100 },
  { name: "IT Support", price: 250 },
  { name: "Consultation", price: 350 },
  { name: "Data Analytics", price: 600 },
];

// Functionality to scroll the screen
bookToday.addEventListener("click", () => {
  document.getElementById("screen2").scrollIntoView({ behavior: "smooth" });
});


let selectedItem = [];
services.map((value) => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("rowDiv");

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btnDiv");

  const addItemButton = document.createElement("button");
  addItemButton.classList.add("addBtn");
  addItemButton.textContent = "Add Item";


  btnDiv.appendChild(addItemButton);

  addItemButton.addEventListener("click", () => {
    belowbtn2text.innerHTML = "";
    const removeItemBtn = document.createElement("button");
    removeItemBtn.classList.add("removeBtn");
    removeItemBtn.textContent = "Remove Item";
    inputName.attributes.rem
    inputName.removeAttribute("readonly")



    btnDiv.innerHTML = "";
    btnDiv.appendChild(removeItemBtn);

    selectedItem.push({ name: value.name, price: value.price });
    displayFunction();

    removeItemBtn.addEventListener("click", () => {
      btnDiv.innerHTML = "";
      btnDiv.appendChild(addItemButton);

      selectedItem = selectedItem.filter((item) => item.name !== value.name);
      displayFunction();
    });
  });

  const columnName = document.createElement("div");
  columnName.textContent = value.name;

  const columnPrice = document.createElement("div");
  columnPrice.style.color = "blue";
  columnPrice.textContent = `₹ ${value.price}.00`;

  rowDiv.append(columnName, columnPrice, btnDiv);
  displayItems.appendChild(rowDiv);
});

function displayFunction() {
  displayItem.innerHTML = "";
  totalPrice = 0;

  selectedItem.map((item, index) => {
    totalPrice += item.price;

    const divwrapper = document.createElement("div");
    divwrapper.classList.add("inside-div");

    const p1 = document.createElement("p");
    p1.classList.add("p1");
    p1.textContent = `${index + 1}`;

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

// displayFunction();

inputName.addEventListener("click", () => {
  if (selectedItem.length <= 0) {
    belowbtn2text.textContent = "Add the item to the cart to book";
    belowbtn2text.style.color = "red";
    belowbtn2text.style.marginTop = "5px";
  }
});

bookbtn.addEventListener("click", () => {
  belowbtn2text.innerHTML = "";
  belowbtn2text.textContent = "Email Has been sent successfully";
  belowbtn2text.style.color = "green";
  belowbtn2text.style.marginTop = "5px";

  (function () {
    emailjs.init("-rtIe-3NVfZbRF6md");
  })();

  const param = {
    sendername: document.querySelector("#inputName").value,
    to: document.querySelector("#inputEmail").value,
    subject:"Launtry Services",
    phoneInput: document.querySelector("#inputNumber").value,
    message:"Your order is booked Successfully. You will get soon"
  };

  let serviceId="service_f69gqkx"
  let templeteId="template_qk53lq4"

  emailjs.send(serviceId, templeteId, param)

  setTimeout(() => {
    location.reload();
  }, 2000);
});
