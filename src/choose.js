import CLOUDS from "../assets/BG.png";
import BOX from "../assets/BOX.svg";
import DRAWER_OPEN from "../assets/Drawer_Open.svg";
import DRAWER_PRESS from "../assets/Drawer_Press.svg";
import DRAWER_CLOSE from "../assets/Drawer_Close.svg";

function range(from, to, step = 1) {
  return [...Array(Math.floor((to - from) / step) + 1)].map(
    (_, i) => from + i * step
  );
}

function Drawer({ id }) {
  return /*html */ `
    <button class="relative">
      <img src="${DRAWER_CLOSE}" alt="drawer close"/>

      <span class="absolute top-0 right-0 p-2 text-2xl">${id}</span>
    </button>
  `;
}

export default function Choose() {
  return /*html */ `
    <div class="bg-red text-yellow w-screen h-screen relative flex justify-center overflow-hidden">
        <img class="absolute" src="${CLOUDS}" />

        <main class="space-y-6 font-rokkitt py-8 relative">
          <header class="flex justify-center w-full">
            <h1 class="text-5xl">${"CHOOSE YOUR NUMBER"}</h1>
          </header>

          <div class="w-3/4 mx-auto relative">
            <img src="${BOX}" alt="box image"/>

            <div class="absolute top-0 w-full h-full p-12 mt-3">
              <div class="w-full h-full grid grid-cols-6 gap-4">
                ${range(0, 23)
                  .map((id) => Drawer({ id: id + 1 }))
                  .join("")}
              </div>
            </div>
          </div>
        </main>
    </div>
    `;
}
