const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(+input[0], testCaseArray);

function solution(T, testCaseArray) {
  for (let i = 0; i < T; ++i) {
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;
    console.log(A + B);
  }
}
// node.js 로 다르게 풀 수 있긴 하지만 (구글검색하면 됨)
// 백준에서 시간초과 나는 이 방식이 더 좋은 코드인 듯
