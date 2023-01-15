const inputEl = document.getElementById("font-size-control");
const text = document.getElementById("text");

inputEl.addEventListener("input", () => {
  text.style.fontSize = inputEl.value + "px";
});
