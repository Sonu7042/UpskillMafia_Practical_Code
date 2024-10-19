const students = [
  {
    name: "John Doe",
    marks: 85,
    class: "10th Grade",
    address: "123 Elm Street, Springfield",
  },
  {
    name: "Jane Smith",
    marks: 92,
    class: "11th Grade",
    address: "456 Oak Avenue, Springfield",
  },
  {
    name: "Sam Johnson",
    marks: 78,
    class: "12th Grade",
    address: "789 Pine Road, Springfield",
  },
  {
    name: "Alice Brown",
    marks: 88,
    class: "10th Grade",
    address: "101 Maple Drive, Springfield",
  },
  {
    name: "Bob Davis",
    marks: 95,
    class: "11th Grade",
    address: "202 Birch Lane, Springfield",
  },
  {
    name: "Tony Davis",
    marks: 70,
    class: "13th Grade",
    address: "202 Birch Lane, Springfield",
  },
  {
    name: "Kokker Davis",
    marks: 90,
    class: "7th Grade",
    address: "202 Birch Lane, Springfield",
  },

  {
    name: "roter Davis",
    marks: 90,
    class: "7th Grade",
    address: "202 Birch Lane, Springfield",
  },

  {
    name: "devil Das",
    marks: 90,
    class: "7th Grade",
    address: "202 Birch Lane, Springfield",
  },
];




const container = document.getElementById("container1");


function renderStudents(studentList) {
  container.innerHTML = "";

  studentList.map((value) => {
    const card = document.createElement("div");
    card.classList.add("card");

   
    const nameDiv = document.createElement("div");
    nameDiv.textContent = `Student Name: ${value.name}`;
    card.appendChild(nameDiv);

    const marksDiv = document.createElement("div");
    marksDiv.textContent = `Marks: ${value.marks}`;
    card.appendChild(marksDiv);

    const classDiv = document.createElement("div");
    classDiv.textContent = `Class: ${value.class}`;
    card.appendChild(classDiv);

    const addressDiv = document.createElement("div");
    addressDiv.textContent = `Address: ${value.address}`;
    card.appendChild(addressDiv);

  
    container.appendChild(card);
  });
}


renderStudents(students);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();


  const input = document.getElementById("input").value.toLowerCase();


  const filteredStudents = students.filter((value) =>
    value.name.toLowerCase().startsWith(input)
  );

  renderStudents(filteredStudents);

  
  if (filteredStudents.length === 0) {
    const noResult = document.createElement("div");
    noResult.textContent = "No students found.";
    container.appendChild(noResult);
  }
});
