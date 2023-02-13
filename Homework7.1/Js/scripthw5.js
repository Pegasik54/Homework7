// Задание 1

const answerUser = prompt('Не лает, не кусает, а в дом не пускает?'); 
const answer = 'замок'; 

if (answerUser.toUpperCase() === answer.toUpperCase()) { 
	alert('Это правильный ответ!'); 
} else {
	alert('Не угадал!'); 
}

// ЗАДАНИЕ 2

const findStartsWith = (arr, string) => {
const resultArr = [];
    arr.forEach(element => {
    if (element.toLowerCase().startsWith(string.toLowerCase())) resultArr.push(element);
});
return resultArr;
}
console.log(findStartsWith(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(findStartsWith(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(findStartsWith(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3 

const number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// ЗАДАНИЕ 4

const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));


// ЗАДАНИЕ 5

const rangeMin = 1;
const rangeMax = 10;
console.log(Math.floor(Math.random() * (rangeMax - rangeMin + 1) + rangeMin));


// ЗАДАНИЕ 6

const getWeirdRandomArray = (number) => {
const resultArr = [];
for (let i = 0; i < Math.round(number / 2); i++) {
resultArr.push(Math.floor(Math.random() * (number + 1)));
}
return resultArr;
}
for (let i = 1; i <= 10; i++) {
console.log(getWeirdRandomArray(i));
}


// ЗАДАНИЕ 7

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(getRandomNumber(1, 10));


// ЗАДАНИЕ 8

let currDate = new Date;
console.log(currDate);


// ЗАДАНИЕ 9
       
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// ЗАДАНИЕ 10
        
const formatDate = (date) => {
    const locale = 'ru-RU';
    const dateFormat = { day: 'numeric', month: 'long', year: 'numeric' };
    return `Дата: ${date.toLocaleDateString(locale, dateFormat)} - это ${date.toLocaleDateString(locale, { weekday: 'long' })}.
Время: ${date.toLocaleTimeString(locale)}`
}
console.log(formatDate(new Date()));
// 




