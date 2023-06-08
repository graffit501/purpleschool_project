/*
Пользователь хочет приобрести игру в магазине. Он может это сделать только если:
Eго баланс больше 1000 (balance) или число бонусов больше 100 (bonusBalance)
Он не забанен (isBanned)
Игра не куплена (isExist)
Игра в продаже (isSelling)
Напишите условие для покупки и выведите в консоль результат.
*/
let balance =10;
let bonusBalance =30;
let isBanned = false;
let isExist = false;
let isSelling = true;
console.log((balance>1000 || bonusBalance>100)&& !isBanned && !isExist && isSelling)
