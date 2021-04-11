import CLOUDS from "../assets/BG.png";
import DININATION_NORMAL from "../assets/Divination_Normal.svg";

function DivinationBlocks() {
  return /*html */ `
    <div>
        <img src="${DININATION_NORMAL}" alt="Divination Blocks image"/>
    </div>
    `;
}

export default function Divination() {
  return /*html */ `
    <div class="bg-red text-yellow w-screen h-screen relative flex justify-center overflow-hidden">
        <img class="absolute" src="${CLOUDS}" />

        <main class="space-y-12 font-rokkitt py-8 relative">
            <header class="flex flex-col items-center w-full">
                <h1 class="text-5xl">${"IS THIS THE RIGHT ONE?"}</h1>
                <p>${"You need to get “Yes” for three times"}</p>
            </header>

            <div class="flex items-center">
                <div class="flex-1 flex justify-center">
                    <p class="text-2xl">${"Click the Divination blocks"}</p>
                </div>

                <div class="flex-1">
                    ${DivinationBlocks()}
                </div>
            </div>
        </main>
    </div>
    `;
}
