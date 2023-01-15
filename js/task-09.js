function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector(".color");

buttonEl.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
});
