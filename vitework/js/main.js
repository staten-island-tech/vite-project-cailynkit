import { t } from "./themes.js";
import { Menu } from "./array.js";
const DOM = {
  root: document.documentElement,
  lightbutton: document.getElementById("light"),
  darkbutton: document.getElementById("dark"),
  main: document.getElementById("main"),
  filter: document.getElementById("filter"),
};

let currentTheme = t.normal;

function changeTheme(theme) {
  let propArray = Object.keys(theme);
  currentTheme = theme;
  propArray.forEach(function (item) {
    DOM.root.style.setProperty(item, theme[item]);
  });
}

DOM.lightbutton.addEventListener("click", function () {
  if (currentTheme === t.light) {
    changeTheme(t.normal);
  } else {
    changeTheme(t.light);
  }
});

DOM.darkbutton.addEventListener("click", function () {
  if (currentTheme === t.dark) {
    changeTheme(t.normal);
  } else {
    changeTheme(t.dark);
  }
});

function buildMain() {
  Menu.forEach((food) => {
    DOM.main.insertAdjacentHTML(
      "beforeend",
      `<div class="box">
      <img class="img" src="${food.img}"></img>
    <p id="text">Food: ${food.name}</p>
    <p id="text">Meal Type: ${food.meal}</p>
    <p id="text">Price: $${food.price}</p>
   </div>`
    );
  });
}
buildMain();

let alreadyFilteredbyLunch = false;
DOM.filter.addEventListener("click", function () {
  DOM.main.innerHTML = "";
  if (!alreadyFilteredbyLunch) {
    Menu.filter((food) => food.meal.includes("Lunch")).forEach((food) => {
      DOM.main.insertAdjacentHTML(
        "beforeend",
        `<div class="box">
    <img class="img" src="${food.img}"></img>
  <p id="text">Food: ${food.name}</p>
  <p id="text">Meal Type: ${food.meal}</p>
  <p id="text">Price: $${food.price}</p>
 </div>`
      );
      alreadyFilteredbyLunch = true;
    });
  } else {
    buildMain();
    alreadyFilteredbyLunch = false;
  }
});
