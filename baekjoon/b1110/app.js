const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);

function solution(N) {
  let makeNum = N;
  let i = 0;
  let sum;
  while (true) {
    i++;
    sum = Math.floor(makeNum / 10) + (makeNum % 10);
    makeNum = (makeNum % 10) * 10 + (sum % 10);

    if (makeNum === N && i !== 0) {
      break;
    }
  }
  console.log(i);
}
// 라매개발자의 문자열 이용하는 방식도 해봤는데
// 구글 검색 블로그 (나를 제외한 천재들) 답이 더 좋은 답 같음!
