//Defining variable
// var a = "a";
// let b = "A";
// const c = 9;

for (let i = 0; i < 10; i++) {
  //   console.log("hello");
}

// while (true) {

// }

// do{

// }while();

// if(a || b){
//     console.log("Yes");

// }else{
//     console.log("NO");

// }

// switch (a) {
//     case 'a':

// }

let arry = [1, 2, "hello", [1, 2, 3, 4], true];

// console.log(arry[2], 33);

let obj = {
  name: "sagar",
  age: 12,
  address: {
    street: "street1",
    city: "city1",
    country: "",
  },
};

// console.log(obj.address, 45);

delete obj.address;
// console.log(obj, 48);

// console.log(obj.name, obj.age, obj.address.street);

// Function =================>
// function add(a, b, c) {
//   console.log(a + b + c, "addition");
// }
// add();

const add = (a, b, c) => {
  console.log(a + b + c, "addition");
};

add(3, 5, 6);
add(10, 11, 12);

// Array methods
let arr = [1, 4, 2, 6, 7, 8, 9, 4];

let n = arr.indexOf(4);

// console.log(n, "n");

// arr.push(10);

// console.log(arr.pop());

// console.log(arr, "after");

// arr.shift();

// arr.unshift(5);

// arr.splice(1,2)

// console.log(arr, "before");

const newArr = arr.slice(1, 3);

// console.log(newArr, "after");

const btn = document.getElementById("btn");
const btn2 = document.getElementsByClassName("btn");
const btn3 = document.getElementsByTagName("button");
const btn4 = document.querySelector(".btn");
const btn5 = document.querySelectorAll(".btn");

console.log(btn);

// const div = document.querySelector("#myDiv");

// div.innerHTML = "hello this content is from JS";

btn.addEventListener("dblclick", () => {
  btn.style.backgroundColor = "blue";
});

const btnClick = () => {
  alert(btn);
};

const myDiv = document.querySelector("#myDiv");
const input = document.querySelector("#inp");

myDiv.addEventListener("keyup", () => {
  myDiv.style.backgroundColor = "blue";
});

const handleChange = (e) => {
  // console.log(e);
  alert("asdf");
};

const formInput = document.querySelector("#txt");

formInput.addEventListener("onchange", () => {
  alert("hello");
});

const handleSubmit = (e) => {
  formInput.style.backgroundColor = "blue";
  e.preventDefault();
  console.log(e);
  alert(e);
};
