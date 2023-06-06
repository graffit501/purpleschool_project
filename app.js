/*
Ваша часовая ставка 80$ и вы готовы работать не более 5 часов в день 5 дней в неделю (кроме выходных).
К вам приходит заказчик и предлагает заказ на 40 часов работы. Сейчас понедельник. Вы должны уехать через 11 дней.
Выведете в консоль:
Boolean переменную успеете ли вы взяться за работу
Сколько вы за неё попросите?
*/

const stake = 80;
const workday = 5;
const workingHour = 5;
const contract =  40;
let payment = contract*80;
let result = contract/workingHour>5?contract/workingHour+2:contract/workingHour;
console.log(`Смогу лия выполнить ${result<11}`);
console.log (`ставка ${payment}$`);
