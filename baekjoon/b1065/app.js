const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(N) {
  let count = 0;
  for (let i = 1; i <= N; ++i) {
    let Arr = String(i);
    if (i < 100) {
      count++;
      continue;
    }
    let A = Number(Arr[0]) - Number(Arr[1]);
    let B = Number(Arr[1]) - Number(Arr[2]);
    if (A === B) {
      count++;
    }
  }
  console.log(count);
}
