/*
методом prompt получите ответ пользователя
на вопрос "Сколько будет 7 + или - 15". Если ответ верен - 
выведите в консоле - УСПЕХ, если нет - ВЫ РОБОТ!
А если он введет я не робот, то тоже УСПЕХ
*/

const rightAnswer = prompt("Проверка на робота! Сколько будет 7 + 15");

switch (true) {
    case rightAnswer === "22":
        console.log("Успех");
        break;
    case rightAnswer === String("Я не робот"):
        console.log("Успех");
        break;
    default:
        console.log("Вы роботишко!!!");
}