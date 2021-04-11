import "./style.scss";
import "./src/index";

function render(html) {
  document.querySelector("#app").innerHTML = html;
}

render((await import("./src/choose")).default());
