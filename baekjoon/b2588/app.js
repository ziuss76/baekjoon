const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => Number(item));

solution(input[0], input[1]);

function solution(A, B) {
  const stringB = String(B);
  const one = +stringB[2];
  const ten = +stringB[1];
  const hun = +stringB[0];
  console.log(A * one);
  console.log(A * ten);
  console.log(A * hun);
  console.log(A * B);
}
