//1. Используя метод map() напишите код, который получает из
//массива строк новый массив, содержащий их длины

function getLength(arr) {
    return arr.map((str) => str.length);
}

const words = ["apple", "banana", "cherry"];
const lengths = getLength(words);
console.log(lengths);

//2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию
//currentSums(numbers), которая возвращает новый массив из
//такого же числа элементов, в котором на каждой позиции
//будет находиться сумма элементов массива numbers до этой
//позиции включительно.

function currentSums(numbers) {
    let result = [];
    numbers.reduce((sum, current) => {
        sum += current;
        result.push(sum);
        return sum;
    }, 0);
    return result;
}

const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(currentSums(numbers));

//3. Напишите код, который получает из массива чисел новый
//массив, содержащий пары чисел, которые в сумме должны
//быть равны семи: (0:7), (1:6) и т.д.

function findPairs(numbers) {
    let result = [];

    numbers.forEach((num, i) => {
        numbers.slice(i + 1).forEach((nextNum) => {
            if (num + nextNum === 7) {
                result.push([num, nextNum]);
            }
        });
    });

    return result;
}

console.log(findPairs([0, 1, 2, 3, 4, 5, 6, 7]));

//4. Напишите код, создающий массив, который будет состоять из
//первых букв слов строки str.

function firstLetters(str) {
    return str.split(" ").map((word) => word[0]);
}

console.log(firstLetters("hello world how are you"));

//5. Напишите код, создающий массив, который будет состоять из
//строк, состоящих из предыдущего, текущего и следующего
//символа строки str.

function getThreeSymbols(str) {
    return str.split("").reduce((result, _, i, arr) => {
        let prev = arr[i - 1] || "";
        let current = arr[i];
        let next = arr[i + 1] || "";
        result.push(prev + current + next);
        return result;
    }, []);
}

console.log(getThreeSymbols("abcdef"));

//6. Напишите код, преобразующий массив цифр, которые
//располагаются неупорядоченно, в массив цифр
//расположенных по убыванию их значений.

function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

console.log(sortDescending([3, 1, 4, 5, 2]));

//7. Напишите код, объединяющий три массива цифр, и
//располагающий цифры, в полученном массиве, в порядке
//убывания их значений через пробел.

function mergeAndSort(arr1, arr2, arr3) {
    const mergedArray = [...arr1, ...arr2, ...arr3];

    mergedArray.sort((a, b) => b - a);
    return mergedArray.join(" ");
}

const arr1 = [3, 5, 1];
const arr2 = [9, 2, 4];
const arr3 = [8, 6, 7];

console.log(mergeAndSort(arr1, arr2, arr3));

//8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5],
//[6]]. Найдите сумму элементов этого массива. Массив, конечно
//же, может быть произвольным.

function sum2DArray(arr) {
    return arr.flat().reduce((sum, num) => sum + num, 0);
}

const array = [[1, 2, 3], [4, 5], [6]];

console.log(sum2DArray(array));

//9. Дан массив с числами. Не используя метода reverse
//переверните его элементы в обратном порядке

function reverseArray(arr) {
    const reversedArray = [];
    arr.forEach((el) => {
        reversedArray.unshift(el);
    });
    return reversedArray;
}

const arr4 = [9, 8, 3, 0, 5];

console.log(reverseArray(arr4));

//10. Дан массив с числами. Узнайте сколько элементов с начала
//массива надо сложить, чтобы в сумме получилось больше
//10-ти.

function countToLimitTen(arr) {
    let sum = 0;
    let count = 0;

    arr.forEach((el) => {
        if (sum >= 10) return;
        sum += el;
        count++;
    });

    return count;
}

const arr5 = [2, 3, 5, 1, 4, 6];

console.log(countToLimitTen(arr5));

//11. Напишите функцию arrayFill, которая будет заполнять
//массив заданными значениями. Первым параметром функция
//принимает значение, которым заполнять массив, а вторым -
//сколько элементов должно быть в массиве. Пример:
//arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(value, length) {
    return new Array(length).fill(value);
}

console.log(arrayFill("#", 10));
