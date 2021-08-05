const chances = [
  { left: 0, right: 1 },
  { left: 0, right: 1 },
  { left: 0, right: 1 },
  { left: 1, right: 0 },
  { left: 1, right: 0 },
  { left: 1, right: 0 },
  { left: 1, right: 1 },
  { left: 0, right: 0 },
];

function pickFrom(list) {
  return list[(list.length * Math.random()) | 0];
}

// export default 
function gameloop() {
  let win = 0;

  return function random() {
    const { left, right } = pickFrom(chances);

    const result = (left + right) % 2;
    win += result;

    return { left, right, result, win };
  };
}

// From html
const playOnce = gameloop();

// divination blocks (n.) 筊杯
function BuaBuey(el, type) {
    const img = el.querySelector('img');

    return {
        run(result) {
            // Eric TODO
            el.classList.add('run');  // 下落動畫的class
            img.src = `public/Divination_${type}_${result === 0 ? 'Close' : 'Open'}.png`
            el.addEventListener('animationend', () => {
              el.classList.remove('run'); // 移除下落動畫的class，避免動畫只顯現一次
            })
            return result;
        }
    }
}

function log({ left, right, result, win }) {
    // Eric TODO
    document.querySelector('[data-win-count]').dataset.winCount = win;
    document.querySelector('#win-count').innerHTML = win;
    // querySelector 會選到第一個符合的
}

function shake(el) {
    const result = playOnce();

    console.log(result);

    log(result);

    const left = BuaBuey(el.querySelector('div:first-child'), 'L');
    // 選它之下的第一個div
    const right = BuaBuey(el.querySelector('div:last-child'), 'R');
    // 選它之下的最後一個div                // nth-child(2) 選第二個?

    left.run(result.left);
    right.run(result.right);

    // Eric TODO

    // 1. if not win
    if(result.result === 0){
      el.addEventListener('animationend', () => {
        el.classList.remove('run'); // 移除下落動畫的class，避免動畫只顯現一次
        window.location = 'choose.html';
      })
    }
    // 2. if win
    if(result.win === 3){
      // console.log("WIN!");
      window.location = 'result.html';
    }
}

window.shake = shake;
