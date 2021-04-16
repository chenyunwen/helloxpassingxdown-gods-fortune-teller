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

export default function gameloop() {
  let win = 0;

  return function random() {
    const { left, right } = pickFrom(chances);

    const result = (left + right) % 2;
    win += result;

    return { left, right, result, win };
  };
}
