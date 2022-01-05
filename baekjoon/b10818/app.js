const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const inputN = +input[0];
const arrayA = input[1].split(" ").map((item) => +item);

solution(inputN, arrayA);

function solution(N, A) {
  let max = A[0];
  let min = A[0];

  for (let i = 0; i < N; ++i) {
    if (max < A[i]) {
      max = A[i];
    }
    if (min > A[i]) {
      min = A[i];
    }
  }
  console.log(`${min} ${max}`);
}
//블로그 힌트만 보고 내가 직접 품!
