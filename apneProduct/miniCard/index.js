const api =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=c814e20ddba2485c848f9b0223c4c487";

const btn = document.querySelector("#btn");
const container = document.querySelector(".container");



let show=false

btn.addEventListener("click", (e) => {
  
  async function fetchData() {
    const response = await fetch(api);
    const json = await response.json();
    console.log(json)

    json.articles.map((element, index) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const p = document.createElement("p");
      p.textContent = element.author;

      const title = document.createElement("p");
      p.textContent = element.title;

      const a = document.createElement("a");
      a.target = "_blank";
      a.href = element.url;
      a.textContent = "Read more";

      card.append(p, title, a);

      container.appendChild(card);
    });
  }


  show= !show
  if(show){
    fetchData()
    
  }
  else{
    container.innerHTML=""

  }


});
