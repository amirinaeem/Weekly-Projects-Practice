const chagenbtn1 = document.querySelector(".btn.active");
const chagenbtn2 = document.querySelector(".active2");
const chagenbtn3 = document.querySelector(".active3");

let divImage1 = document.querySelector(".image-box1");
let divImage2 = document.querySelector(".image-box2");
let divImage3 = document.querySelector(".image-box3");

chagenbtn1.addEventListener("click", () => {
  divImage2.style.display = "none";
  chagenbtn2.style.backgroundColor = "rgb(101, 100, 100)";
  chagenbtn3.style.backgroundColor = "rgb(101, 100, 100)";
  divImage3.style.display = "none";
  divImage1.style.display = "block";
  chagenbtn1.style.backgroundColor = "white";
});

chagenbtn2.addEventListener("click", () => {
  chagenbtn3.style.backgroundColor = "rgb(101, 100, 100)";
  divImage1.style.display = "none";
  divImage3.style.display = "none";
  chagenbtn1.style.backgroundColor = "rgb(101, 100, 100)";
  chagenbtn3.style.backgroundColor = "rgb(101, 100, 100)";
  chagenbtn2.style.backgroundColor = "white";
  divImage2.style.display = "block";
});

chagenbtn3.addEventListener("click", () => {
  divImage1.style.display = "none";
  divImage2.style.display = "none";
  chagenbtn1.style.backgroundColor = "rgb(101, 100, 100)";
  chagenbtn2.style.backgroundColor = "rgb(101, 100, 100)";
  divImage3.style.display = "block";
  chagenbtn3.style.backgroundColor = "white";
});
