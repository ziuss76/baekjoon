const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

solution(Number(input[0]));

function solution(N) {
  for (let i = N; i >= 1; --i) {
    console.log(i);
  }
}

// 시간초과가 남
