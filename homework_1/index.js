console.log("Hello World!");

//types

//number

let price = 100;
console.log(price); //100
console.log(typeof price); //number

//string

const firstName = "Иван";
console.log(firstName); //Иван
console.log(typeof firstName); //string
firstName = "Мария"; //Ошибка: Assignment to constant variable

//boolean

let isRaining = false;
console.log(isRaining);  //false
console.log(typeof isRaining); //boolean

//null

let result = null;
console.log(result); //null
console.log(typeof result); //object


//undefined

let userAge;
console.log(userAge); //undefined
console.log(typeof userAge); //undefined

//symbol

const id = Symbol("id");
console.log(id); //Symbol(id)
console.log(typeof id); //symbol

//bigint

let bigNumber = 455125641514n;
console.log(bigNumber); //455125641514n
console.log(typeof bigNumber); //bigint

//Object

const product = {
    name: "Smartphone",
    brand: "Xiaomi",
    color: "black",
    ram: 6,
};

console.log(product); //{ name: 'Smartphone', brand: 'Xiaomi', color: 'black', ram: 6 }
console.log(typeof product); //object

product = { 
    name: "Smartphone", 
    brand: "Samsung",
    color: "gray", 
    ram: 16 
};                     // Ошибка: Assignment to constant variable


let person = {
    name: "John",
    age: 30
};

console.log(person) //{ name: 'John', age: 30 }

person = {
    name: "Michael",
    age: 85
};

console.log(person) //{ name: 'Michael', age: 85 }

var user = {
    name: "Alice",
    age: 25,
};

console.log(user); //{ name: 'Alice', age: 25 }

user = {
    name: "Kim",
    age: 35,
};

console.log(user) //{ name: 'Kim', age: 35 }

 




 



