import CLOUDS from "../assets/BG.png";
import FORTUNE_STICK from "../assets/Fortune_Stick.svg";

export default function Result() {
  return /*html */ `
    <div class="bg-red text-yellow w-screen h-screen relative flex justify-center overflow-hidden">
        <img class="absolute" src="${CLOUDS}" />

        <main class="space-y-12 font-rokkitt py-8 relative">
            <header class="flex flex-col items-center w-full">
                <h1 class="text-5xl">${"Apparently......"}</h1>
            </header>

            <div class="flex w-screen">
                <div class="flex-1"></div>

                <img src="${FORTUNE_STICK}" alt="fortune stick image"/>

                <div class="flex-1 mx-8 flex justify-center h-screen-3/4">
                    <div class="mt-auto">
                        <button class="bg-red-light w-48 py-1 rounded-xl text-2xl">${"Try it again"}</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
    `;
}
