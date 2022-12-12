import { t } from "./themes.js";
const DOM = {
  root: document.documentElement,
  lightbutton: document.getElementById("light"),
  darkbutton: document.getElementById("dark"),
};

function changeTheme(theme) {
  let propArray = Object.keys(theme);
  propArray.forEach(function (item) {
    DOM.root.style.setProperty(item, theme[item]);
  });
}

DOM.lightbutton.addEventListener("click", function () {
  changeTheme(t.light);
});

DOM.darkbutton.addEventListener("click", function () {
  changeTheme(t.dark);
});
