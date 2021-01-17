import Solution1 from "./solutions/Solution1";
import Solution2 from "./solutions/Solution2";

const fs = require("fs");

let input_data = fs.readFileSync("./inputs/input.txt", {
  encoding: "utf8",
});
let input_test_data = fs.readFileSync("./inputs/inputtest.txt", {
  encoding: "utf8",
});

let useTestData = true; //CHANGE FOR DATA INPUT HERE

const solution1 = new Solution1({
  data: useTestData ? input_test_data : input_data,
});
const solution2 = new Solution2({
  data: useTestData ? input_test_data : input_data,
});

console.log("Solution 1:", solution1.result());
console.log("Solution 2:", solution2.result());
