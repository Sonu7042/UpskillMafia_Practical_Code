const slider = document.querySelector(".container");
let isDown = false;
let startX;
let scrollLeft;

for (let i = 2; i <= 10; i++) {
  let div = document.createElement("div");
  div.classList.add("slide");
  div.innerHTML = `
    <img src="images/img${i}.jpg">
    `;
  slider.appendChild(div);
}

document.querySelector("body").addEventListener("mousedown", (e) => {
  e.preventDefault();
});

slider.addEventListener("mousedown", (e) => {
  e.preventDefault();

  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  console.log(startX);
  console.log(e.pageX);
  console.log(slider.offsetLeft);
  scrollLeft = slider.scrollLeft;
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk / 2;
  });
});
slider.addEventListener("mouseup", (e) => {
  e.preventDefault();
  isDown = false;
});

document.querySelector(".slide").addEventListener("click", (e) => {
  e.preventDefault();
});
