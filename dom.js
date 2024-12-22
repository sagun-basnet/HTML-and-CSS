// const timeOut = setTimeout(() => {
//   console.log("Hello from timeout");
// }, 3000);

// clearTimeout(timeOut);

// const inter = setInterval(() => {
//   console.log("Hello");
// }, 2000);

// clearInterval(inter);

// let count = 5;
// const interval = setInterval(() => {
//   console.log("Count " + count);

//   count--;
//   if (count === 0) {
//     console.log("Time stoped...");
//     clearInterval(interval);
//   }
// }, 2000);

let a = 10;
let b = 0;

try {
  if (b === 0) {
    // throw new Error("Divide by zero");
  }
  let res = a / b;
  // console.log(res, "Result");
} catch (e) {
  // console.error(e, "Error");
}

// console.log("Hello");

// const ab = [
//   {
//     name: "John",
//     age: 30,
//     occupation: "Developer",
//   },
//   {
//     name: "John",
//     age: 30,
//     occupation: "Developer",
//   },
// ];

// console.log(JSON.stringify(ab));

// const apiFetch = async () => {
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     // result = JSON.parse(res);
//     res.json();
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// };

// console.log("asdfasdfasd");

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// var vs let ==================>

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i, "Outside the block");
// Arrow function =============>

// const fun = () => {
//   return 0;
// };

// const fun = (a, b) => a + b;

// function fun() {
//   return 0;
// }

//destructuring ===============>
// const obj = {
//   name: "John",
//   age: 30,
//   occupation: "Developer",
// };

// // console.log();

// const { name, age, occupation } = obj;
// console.log(name);

// console.log(name);

// console.log(age, ":age");

// spread and rest operator ===============>

// const arr1 = [1, 2, 3, 4, 5];

// const [first, second, ...others] = arr1; // rest operator
// console.log(first, "first");
// console.log(second, "second");
// console.log(others, "others");

// const arr2 = [6, 7, 8, 9, 10];
// const arr3 = [...arr2, 10, 11, 12]; // spread operator
// console.log(arr3);

// const user = {
//   name: "John",
//   age: 19,
//   email: "john@gmail.com",
//   password: "jhon@123",
// };

// const { password, ...info } = user;
// console.log(password, "password");
// console.log(info, "info");

// Template literals ===============>
// const name = "sagat";
// const age = 12;
// const occupation = "Developer";
// const address = "Dhaka";

// const str =
//   "Welcome " +
//   name +
//   " your age is " +
//   age +
//   " and you are a " +
//   occupation +
//   " and you live in " +
//   address;

// console.log(str);

// const newStr = `Welcome ${name} your age is ${age} and you are a ${occupation} and you live in ${address}`;
// console.log(newStr);

// map ==================>
// arr1.map((value) => {
//   console.log(`Value ${value}`);
// });

//Reduce =================>
// const sum = arr1.reduce((prevValue, currValue) => {
//   return prevValue + currValue;
// }, 0);

// console.log(sum);
asdjflasfd;

const arr1 = [1, 26, 3, 544, 5];
//Filter =================>
// const newArr = arr1.filter((value) => {
//   return value > 2;
// });

// console.log(newArr);

//forof ==================>
// for (const i of arr1) {
//   console.log(i);
// }
