console.log("START index.js .......................................");

function greet(firstName, lastName) {
  console.log("Name =" + " " + firstName + " " + lastName);
}
greet("vinayak", "saini");

//Regular Function
const greet1 = function () {
  console.log("GOOD Morning greet 1");
};
greet1();

//Arrow Function
//Arrow Function alternate
// const greet2 = () => {
//   console.log("GOOD Morning greet 2");
// };
// greet2();
const greet2 = () => console.log("GOOD Morning greet 2");
greet2();

//Regular Function
const sum1 = function (num1, num2) {
  return num1 + num2;
};
result1 = sum1(2, 3);
console.log(result1);

//Arrow Function
const sum2 = (num1, num2) => {
  return num1 + num2;
};
result2 = sum2(10, 20);
console.log(result2);

console.log("END OF index.js ............................................");
