const divs = document.querySelector(".swiper-wrapper");
for (let i = 2; i <= 11; i++) {
  let div = document.createElement("div");
  div.classList.add("swiper-slide");
  div.innerHTML = `
    <img src="images/img${i}.jpg" />
    `;
  divs.appendChild(div);
}

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});