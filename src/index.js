import "./styles/main.css";
import "./index.html";
import Icon from "./img/favicon.png";
import { foo, headerEl } from "./js/print";
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello PRODD webpack";
  element.classList.add("hello");
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}
console.log("foo:", foo(2, 5));

const root = document.getElementById("root");
root.append(headerEl);
document.body.appendChild(component());
