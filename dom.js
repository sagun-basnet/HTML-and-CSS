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
