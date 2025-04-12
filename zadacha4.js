/*
пользователшь хочет купить игру в магазине
Он может это сделать только еcли:
- ЕГо баланс больше 1000 (balance)
или число бонусов больше 100 (bonusBalance)
- Он не забанен (isBanned)
- Игра не куплена (ixExist)
- Игра в продаже (isSelling)
Напишите условие для покупке и выведите в консоль результат
*/
const balance = 900;
const bonusBalance = 90;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
    && !isBanned
    && !isExist 
    && isSelling;
console.log(`Сможет ли парень купить игру? ${canBuy ? ' Да' : ' Неа'}`);