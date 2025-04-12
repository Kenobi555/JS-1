
//False из других типов

console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false

console.log(Boolean(Number('sx')));//false
//что мы получаем
console.log(Boolean(NaN));//false

//if/else и управление потоками

const money = 10;    //Можно не использовать: const canBuy = money > 50; //условие
if (money > 50) {
    console.log('Может купить наш продукт');// если тут false - JS пропустит весь этот блок if
} else if (money > 5) {
    console.log('Куплен мини продукт');
} else {
    console.log ('Не хватает баланса');
}                 

console.log('Итог');

//Операторы равенства

const secretNumber = '7';

if (secretNumber == 7) { //нестрогое равенство, определяет по значениям
    console.log('Угадал')
};

if (Number(secretNumber) === 7) { //строгое равенство, определяет по типу и значению
    console.log('Угадал строго')
};

//Лучше не использовать не строгое равно ==

/*const q = Number(prompt('Введите число'));
if (q === 7) {
    console.log('Угадал не строго')
};
*/

//switch statement

const role = 'ceo';

if (role === 'manager') {
    console.log('Менеджер')
} else if (role === 'admin') {
    console.log('Админ')
} else if (role === 'ceo') {
    console.log('СЕО')
} else {
    console.log('Мы тебя не знаем')
};

switch (role) {
    case 'manager': // role === 'manager
        console.log('Менеджер');
        break;
    case 'admin': //role === 'admin
        console.log('Админ');
        break;
    case 'ceo':
        console.log('Сео');
        break;
    default:
        console.log('мы тебя не знаем');
};

switch (role) {
    case 'manager': // role === 'manager
    case 'admin': //role === 'admin
        console.log('Не руководитель');
        break;
    case 'ceo':
        console.log('Руководитель');
        break;
    default:
        console.log('мы тебя не знаем');
};

const num = 1;

switch(true) {
    case num > 0: //true === num > 0
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль');
}

//Тернарные операторы
const bmwX3Price = 100000;
const budget = 20000;

let message;
if (budget > bmwX3Price) {
    message = 'BMW';
} else {
    message = 'Велосипед';
}

console.log (`Я хочу купить ${message}`); //неправильный вариант, скоуп видимости переменной
//для этого есть более краткая запись
const stroka = -3 > 0 ? ('Больше нуля') : ('Не больше нуля');
console.log (stroka);
//правильный вариант для нашей записи
console.log (`Я хочу купить ${budget > bmwX3Price ? 'BMW' : 'Велосипед'}`);

//Булева логика
//логические операторы

const isAdmin = false;
const canWrite = true;
console.log(`Системный файл ${isAdmin && canWrite}`); //оператор И - может записать файл если он админ и может записать
console.log(`Обычный файл ${isAdmin || canWrite}`); //оператор ИЛИ - либо если админ, либо может записать
console.log(`Инвертируем права админа ${!isAdmin}`);//оператор NOT

const isEdited = true;
const superAdmin = true;
console.log(`Системный файл с редактированием ${
    isAdmin && canWrite && (!isEdited || superAdmin)
}`);

//операторы с другими типами
console.log('Вася' || 'Олег'); // Выведется первый операнд
console.log(false || 'Олег'); // Выведется второе (тру)
console.log('Вася' && 'Олег'); // выведет 2 операнд если первое тру

let namie = 'Марина';
const username = namie || 'Петя'
console.log(username);

const isAddmin = true;
const fileNamee = isAddmin && 'file.mp4';
console.log(fileNamee);














