import "./style.scss";
import CLOUDS from "./assets/BG.png";
import TEMPLE from "./assets/Temple.svg";

function render(html) {
  document.querySelector("#app").innerHTML = html;
}

render(/*html */ `
  <div class="bg-red text-yellow w-screen h-screen relative flex justify-center items-center overflow-hidden">
    <img class="absolute" src="${CLOUDS}" />

    <main class="space-y-6 font-rokkitt">
      <div class="flex items-flex-end justify-space-between w-full">
        <h1 class="text-5xl">${"月老抽籤筒"}</h1>

        <div class="w-32 mx-16">
          <img src="${TEMPLE}" />
        </div>
      </div>

      <h2 class="text-5xl">${"MATCHMAKER GOD’s FORTUNE TELLER"}</h2>

      <p class="text-right text-2xl">${"Find your Mr./s Right without Tinder"}</p>

      <div class="flex justify-flex-end">
        <button class="bg-red-light w-48 py-1 rounded-full text-2xl">${"GO"}</button>
      </div>
    </main>
  </div>
`);
