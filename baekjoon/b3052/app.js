const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const items = input.map((item) => +item);

solution(items);

function solution(items) {
  const userNum = [];
  for (let i = 0; i <= 9; i++) {
    const num = items[i] % 42;

    if (userNum.indexOf(num) === -1) {
      userNum.push(num);
    }
  }
  console.log(userNum.length);
}
// 이것도 나를 제외한 천재들 참고해서 품22
