const card = document.querySelector(".card");

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((json) => {
      json.map((item, index) => {

        let id = document.createElement("p");
        id.textContent = item.id;
       
        let title = document.createElement("div");
        title.textContent = item.title;


        let body = document.createElement("div");
        body.textContent= item.body

        
        card.append(id, title, body);
      });
    });
}
fetchData();
