
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













