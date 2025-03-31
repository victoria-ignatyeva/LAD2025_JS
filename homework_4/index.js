//1. Сделайте функцию, которая возвращает квадрат числа. Число
//передается параметром.

function getSquare(num) {
    return num ** 2;
}

console.log(getSquare(0.5)); //0,25

//2. Сделайте функцию, которая возвращает сумму двух чисел

function sum(num1, num2) {
    return num1 + num2;
}

//3. Сделайте функцию, которая отнимает от первого числа второе
//и делит на третье.

function subtractAndDivide(num1, num2, num3) {
    return (num1 - num2) / num3;
}

console.log(subtractAndDivide(15, 5, 2)); //5

//4. Сделайте функцию, которая принимает параметром число от 1
//до 7, а возвращает день недели на русском языке.

function getDayOfWeek(num) {
    switch (num) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
        default:
            return "Ошибка: введите число от 1 до 7";
    }
}

console.log(getDayOfWeek(6));

//5. Сделайте функцию, которая параметрами принимает 2 числа.
//Если эти числа равны - пусть функция вернет true, а если не
//равны - false.

function checkIsEqual(num1, num2) {
    return num1 === num2;
}

//6. Сделайте функцию, которая параметрами принимает 2 числа.
//Если их сумма больше 10 - пусть вернет true, а если нет то -
//false

function checkIsSumGreaterThanTen(num1, num2) {
    return num1 + num2 > 10;
}

console.log(checkIsSumGreaterThanTen(6, 5));
console.log(checkIsSumGreaterThanTen(3, 4));

//7. Сделайте функцию, которая параметром принимает число и
//проверяет - отрицательное оно или нет. Если отрицательное -
//пусть функция вернет true, а если нет - false.

function checkIsNegative(num) {
    return num < 0;
}

//8. Сделайте функцию isNumberInRange, которая параметром
//принимает число и проверяет, что оно больше нуля и меньше
//10. Если это так - пусть функция возвращает true, если не так -
//false.

function checkIsNumberInRange(num) {
    return num > 0 && num < 10;
}

//9. *Сделайте функцию getDigitsSum (digit - это цифра), которая
//параметром принимает целое число и возвращает сумму его
//цифр.

function getDigitsSum(num) {
    let numStr = Math.abs(num).toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }
    return sum;
}

console.log(getDigitsSum(-52));

//10. *Найдите все года от 1 до 2020, сумма цифр которых равна
//13. Для этого используйте вспомогательную функцию
//getDigitsSum из предыдущей задачи.

const years = [];

for (let year = 1; year <= 2020; year++) {
    if (getDigitsSum(year) === 13) {
        years.push(year);
    }
}

console.log(years);

//11. Сделайте функцию isEven() (even - это четный), которая
//параметром принимает целое число и проверяет: четное оно
//или нет. Если четное - пусть функция возвращает true, если
//нечетное - false.

function checkIsEven(num) {
    return num % 2 === 0;
}

//12. *Дано число. Сложите его цифры. Если сумма получилась
//более 9-ти, опять сложите его цифры. И так, пока сумма не
//станет однозначным числом (9 и менее). Можно использовать
//функцию getDigitsSum из 9 задачи

function sumToSingleDigit(num) {
    num = Math.abs(num); // Берем модуль числа
    while (num > 9) {
        num = getDigitsSum(num);
    }
    return num;
}

console.log(sumToSingleDigit(64558454)); //5
console.log(sumToSingleDigit(-99999)); //9

//13. * Напишите стрелочную функцию, которая будет
//возвращать true если строка является палиндромом и false в
//противном случае.

// через цикл

const checkIsPalindrome = (str) => {
    str = str.replace(/[^a-zа-я0-9]/gi, "").toUpperCase();
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// через метод reverse

const checkIsPalindrome = (str) => {
    str = str.replace(/[^a-zа-я0-9]/gi, "").toUpperCase();
    return str === str.split("").reverse().join("");
};

console.log(checkIsPalindrome("Коту скоро сорок суток.")); //true
console.log(checkIsPalindrome("Не диво ли, мама?! Хам, а миловиден!")); //true
console.log(checkIsPalindrome("45654")); //true
console.log(checkIsPalindrome("Don’t nod")); //true
console.log(checkIsPalindrome("apple")); //false
