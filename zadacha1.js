const hourCoast = 80;
const timeToWork = 5;
const dayCount = 5;
const daysUntilGone = 11;
const needHour = 40;
const availableHours = (daysUntilGone - 2) * 5;
let uspevayou = availableHours > needHour;
console.log('Успею ли отработать? ' + uspevayou);
console.log('Сколько бабла получу? ' + hourCoast * needHour + ' $');

//Как можно быстрее
const payRateUSD = 80;
const projectHours = 40;
const availHours = (11-2) * 5;
console.log('Смогу ли я работать? ' + (availHours > projectHours));
console.log('Стоимость работ: ' + projectHours * payRateUSD + ' $');