// Write your code here
const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "EslamMohamed",
  [password]: "5566",
  age: 23,
}

console.log(user.username);
console.log(user.password);