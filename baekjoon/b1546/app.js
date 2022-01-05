const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input[0].split(" ").map((item) => +item);
const A = input[1].split(" ").map((item) => +item);

solution(N, A);

function solution(N, A) {
  const max = Math.max(...A);
  let sum = 0;

  for (let i = 0; i < N; i++) {
    sum += (A[i] / max) * 100;
  }
  console.log(sum / N);
}

//영상에 없는 문제, 구글 참조함
