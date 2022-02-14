let firstColor = document.querySelector(".first__color");
let secondColor = document.querySelector(".second__color");
let form = document.querySelector("form");
let radioBtn = document.querySelectorAll('input[type = "radio"]');
let summit = document.querySelector('input[type = "submit"]');
let cssCode = document.querySelector(".cssShowCase");

const setGradient = () => {
  let selectedValue;
  let text;

  for (const sel of radioBtn) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }
  console.log(firstColor.value);
  console.log(secondColor.value);
  console.log(selectedValue);
  document.body.style.backgroundImage =
    "linear-gradient(" +
    selectedValue +
    "," +
    firstColor.value +
    "," +
    secondColor.value +
    ")";

  text = `CSS CODE: Background-image: linear-gradient(${selectedValue}, ${firstColor.value}, ${secondColor.value})`;

  cssCode.textContent = text;
};

form.addEventListener("change", setGradient);
