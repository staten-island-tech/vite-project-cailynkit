import t from "./themes.js";
const DOM = {
  root: document.documentElement,
};
function changeTheme(theme) {
  let propArray = theme.keys();
  propArray.forEach(function (item) {
    root.style.setProperty(item, theme[item]);
  });
}

changeTheme(t.light);
