const imgs = [
  "../image/tiger1.jpg",
  "../image/tiger2.jpg",
  "../image/tiger3.jpg",
];
let index = 0;

const img = document.querySelector("img");
document.querySelector("#prevBtn").addEventListener("click", function () {
  index = (index - 1 + imgs.length) % imgs.length;
  img.src = imgs[index];
});
document.querySelector("#nextBtn").addEventListener("click", function () {
  index = (index + 1) % imgs.length;
  img.src = imgs[index];
});
