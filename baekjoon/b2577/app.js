const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const items = input.map((item) => +item);

solution(items);

function solution(items) {
  let num = String(items[0] * items[1] * items[2]);

  for (let i = 0; i <= 9; i++) {
    let count = 0;

    for (let j = 0; j < num.length; j++) {
      if (+num[j] === i) {
        count++;
      }
    }
    console.log(count);
  }
}
// 이것도 나를 제외한 천재들 참고해서 품
