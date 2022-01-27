// Arraylist que guarda los colores existentes en CSS3
var normalColors = [
  "blue",
  "red",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
];

var hexColors = [
  "#56FF23",
  "#FF0000",
  "#00FF00",
  "#FFFF00",
  "#FFA500",
  "#FF00FF",
  "#FF00FF",
  "#8B4513",
  "#000000",
  "#FFFFFF",
  "#FF00FF",
];

function changeColor(pageName) {
  const content = document.getElementById("content");
  const color = document.getElementById("color");
  if (pageName === "index") {
    // numero aleatorio del 0 al 9
    var randomNumber = Math.floor(Math.random() * 10);
    content.setAttribute(
      "style",
      "background-color: " + normalColors[randomNumber] + ";"
    );
    color.setAttribute("style", "color: " + normalColors[randomNumber] + ";");
    color.textContent = normalColors[randomNumber];
  } else {
    var randomNumber = Math.floor(Math.random() * 11);
    content.setAttribute(
      "style",
      "background-color: " + hexColors[randomNumber] + ";"
    );
    color.setAttribute("style", "color: " + hexColors[randomNumber] + ";");
    color.textContent = hexColors[randomNumber];
  }
}
