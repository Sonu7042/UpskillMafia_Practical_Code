let section = document.querySelector("section");
window.addEventListener("scroll", () => {
  let val = window.scrollY;
  console.log(val)
  section.style.clipPath = `circle(${val *2.3}px at left center)`;
});