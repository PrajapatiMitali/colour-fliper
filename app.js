const colors = [
  " rgb(170, 127, 211)",
  "rgb(165, 228, 165)",
  "rgb(197, 142, 204)",
  "rgb(207, 203, 143)",
  "rgb(226, 152, 142)",
  "rgb(124, 180, 202)",
  "rgb(229, 157, 181)",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
