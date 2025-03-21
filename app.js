// Базовые арифметические операторы 

const width = 10;
const height = 5;
const space = width * height;
const newWidth = width - 4
console.log(newWidth);
const division = newWidth / width;
console.log(division);
const volume = 2 ** 3;
console.log(volume);

//Строки
const city = 'Moscow';
const street = 'Новослободская';
console.log(city + ', ' + street);

//ОПЕРАТОР ПРИСВАНИВАНИЯ И СРАВНЕНИЯ
let age = 18 + 3;
age += 2; // age = age +2
age -= 3; // age = age - 3
age *= 2; // age = age * 2
age /= 2; // age = age /2

age++; // age = age + 1
age--; // age = age - 1
console.log(age);

// Операторы сравнения
const ilya = 25
console.log (age > ilya);
console.log (age >= ilya);
console.log (age < ilya);
console.log (age <= ilya);
console.log (age == ilya);

//Порядок операторов
const isSuited = 100 - 10 > 90 - 5;
console.log(isSuited);
//100 - (12 пр-т) 10 > (10 пр-т) 90 - (12 пр-т) 5
const b = 6 + 10 / 2
console.log (b);

let a;
let c;
a = c = 100 + 50;
console.log(a);
console.log(c);
//важно понимать порядок операторов и когда они просходят с какой стороны

// Типы данных 
let d = 5;
let e = 5.6;
console.log(typeof d);
console.log(typeof e);
d = 'строка';
console.log(typeof d);

let isAdmin = d > 10;
console.log (typeof isAdmin);

let f;
console.log (typeof f);
f = 4
console.log (typeof f);

let g = null;
console.log (g == null);








