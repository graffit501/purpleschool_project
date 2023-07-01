const cardNumber = '1111222233334443';
const cardform = cardNumber.slice(-4);

console.log(cardform.padStart(cardNumber.length, '*'));
