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

//Шаблонные строки
const projectName = 'сайт магазина';
const price = 2000;
const author = 'Василий Пупочкин';

const template = author + 'заказал' + projectName + ' по цене ' + price + ' $';
console.log(template)
//такую вставку длинных строк можно реализовать с помощью шаблонных строк
const template2 = `${author} заказал ${projectName} по цене ${price} $`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена: ' + price + ' $';
console.log(template3);

const template4 = `Проект
Цена: ${price} $`;
console.log(template4);

//Преобразование типов

const vozrast = '18';
console.log(Number(vozrast) + 5); //вызов явной конвертации типов
console.log(vozrast - 3); //неявное преобразование типов
//как только JS видит плюс, он начинает конкатенацию,если минус или деление или умножение
//он понимает что это математич операция

const imya = 'Вася';
console.log(Number(imya) + 5);
//NaN - not a number
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean(123)) //все числа, кроме 0 - true
//Если пустая строка - false

const v = 2 + '10'; // 210
console.log(v - 10); //получится 200

//False из других типов

console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false

console.log(Boolean(Number('sx')));//false
//что мы получаем
console.log(Boolean(NaN));//false







