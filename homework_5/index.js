//1. Преобразовать строку в массив слов. Напишите функцию
//stringToarray(str), которая преобразует строку в массив слов.

function stringToArray(str) {
    return str.split(" ");
}

console.log(stringToArray("Hello maria"));

//2. Напишите функцию deleteСharacters(str, length), которая
//возвращает подстроку, состоящую из указанного количества
//символов.

function deleteСharacters(str, length) {
    return str.slice(0, length);
}

console.log(deleteСharacters("Welcome Home", 5));

//3. Напишите функцию insertDash(str), которая принимает строку
//str в качестве аргумента и вставляет тире (-) между словами.
//При этом все символы строки необходимо перевести в
//верхний регистр.

function insertDash(str) {
    return str.toUpperCase().replaceAll(" ", "-");
}

console.log(insertDash("London is the capital of Great Britain"));

//4. Напишите функцию, которая принимает строку в качестве
//аргумента и преобразует регистр первого символа строки из
//нижнего регистра в верхний.

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("hELlLo"));

//5. Напишите функцию capitalize(str), которая возвращает строку,
//в которой каждое слово начинается с заглавной буквы.

function toTitleCase(str) {
    let arr = str.split(" ");
    let str2 = "";
    for (let i = 0; i < arr.length; i++) {
        str2 += capitalize(arr[i]);
        if (i !== arr.length - 1) {
            str2 += " ";
        }
    }
    return str2;
}

console.log(toTitleCase("maria jack jordan"));

//6. Напишите функцию changeRegister(str), которая принимает в
//качестве аргумента строку и и заменяет регистр каждого
//символа на противоположный. Например, если вводится
//«КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ
//оХоТнИк».

function changeRegister(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(changeRegister("HeLlO"));

//7. Напишите функцию removeChar(str), которая возвращает
//строку, очищенную от всех не буквенно-цифровых символов.

function removeChar(str) {
    return str.replace(/[^\w\s]/g, "");
}

console.log(removeChar("Hello, !!!!! World! 123 @#")); // "Hello World 123"

//8. Напишите функцию zeros(num, len), которая дополняет нулями
//до указанной длины числовое значение с дополнительным
//знаком «+» или «-» в зависимости от передаваемого
//аргумента.

function zeros(num, len) {
    return (num >= 0 ? "+" : "-") + Math.abs(num).toString().padStart(len, "0");
}

console.log(zeros(-35, 6)); // "-000035"

//9. Напишите функцию comparison(str1, str2), которая сравнивает
//строки без учёта регистра символов.

function comparison(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparison("hellO", "HELLO")); //true

//10. Напишите функцию insensitiveSearch(str1, str2), которая
//осуществляет поиск подстроки str2 в строке str1 без учёта
//регистра символов.

function insensitiveSearch(str1, str2) {
    return str1.toLowerCase().indexOf(str2.toLowerCase()) != -1;
}

console.log(insensitiveSearch("Hello World", "world")); // true

//11. Напишите функцию initCap(str), которая преобразует стиль
//написания составных слов строки в CamelCase, при котором
//несколько слов пишутся слитно без пробелов, при этом каждое
//слово внутри строки пишется с заглавной буквы.

function initCap(str) {
    return str.replace(/-([a-z])/g, function (match, letter) {
        return letter.toUpperCase();
    });
}

console.log(initCap("background-color max-width border-top"));
// "background color maxWidth borderTopWidth"

//12. Напишите функцию initSnake(str), которая преобразует
//стиль написания составных слов строки из CamelCase в
//snake_case, при котором несколько слов разделяются
//символом подчеркивания (_), причём каждое слово пишется с
//маленькой буквы.

function initSnake(str) {
    return str.replace(/(?!^)([A-Z])/g, "_$1").toLowerCase();
}

console.log(initSnake("Background color maxWidth borderTopWidth"));
//background color max_width border_top_width

//13. Напишите функцию repeatStr(str, n), которая возвращает
//строку повторяемую определённое количество раз.

function repeatStr(str, n) {
    return (str + "\n").repeat(n);
}

console.log(repeatStr("hello", 2));

//14. Напишите функцию path(pathname), которая возвращает
//имя файла (подстрока после последнего символа "\" ) из
//полного пути к файлу.

function path(pathname) {
    const lastIndex = pathname.lastIndexOf("/");
    return pathname.slice(lastIndex + 1);
}

console.log(path("/home/user/projects/app/index.html")); // "index.html"

//15. Создайте функцию endsWith(), который сравнивает
//подстроку str1 с окончанием исходной строки str и определяет
//заканчивается ли строка символами подстроки.

function endsWith(str, str1) {
    return str.endsWith(str1);
}

console.log(endsWith("apple pie", "pie")); // true

//16. Напишите функцию getSubstr(str, char, pos), которая
//возвращает часть строки, расположенную после или до
//указанного символа char в зависимости от параметра pos.

function getSubstr(str, char, pos) {
    let index = str.indexOf(char);
    return pos === "before" ? str.slice(0, index) : str.slice(index + 1);
}

console.log(getSubstr("hello world", "l", "after"));

//17. Напишите функцию insert(str, substr, pos), которая вставляет
//подстроку substr в указанную позицию pos строки str. По
//умолчанию подстрока вставляется в начало строки

function insert(str, substr, pos = 0) {
    return str.slice(0, pos) + substr + str.slice(pos);
}

console.log(insert("Hello World", "Beautiful ", 6)); // "Hello Beautiful World"

//18. Напишите функцию limitStr(str, n, symb), которая обрезает
//строку, если она длиннее указанного количества символов n.
//Усеченная строка должна заканчиваться троеточием «...»
//(если не задан параметр symb) или заданным символом symb.

function limitStr(str, n, symb = "...") {
    if (str.length > n) {
        return str.slice(0, n) + symb;
    }
    return str;
}

console.log(
    limitStr(
        "A high-performance laptop with the latest Intel processor and high-definition display.",
        25,
    ),
);

//19. Напишите функцию count(str, stringsearch), которая
//возвращает количество символов stringsearch в строке str.

function count(str, stringsearch) {
    const matches = str.match(new RegExp(stringsearch, "gi"));
    return matches ? matches.length : 0;
}

console.log(count("Hello World", "w")); // 1

//20. Напишите функцию strip(str), которая удаляет все лишние
//пробелы из строки str.

function strip(str) {
    return str.trim().replace(/\s+/g, " ");
}

console.log(strip("  Hello    world!    How  are    you?            "));
// "Hello world! How are you?"

//21. Напишите функцию cutString(str, n), которая удаляет лишние
//слова из строки str, оставив в ней n слов.

function cutString(str, n) {
    return str.split(" ").slice(0, n).join(" ");
}

console.log(cutString("test test test test test test", 3)); // "test test test

//22. Напишите функцию findWord(word, str), которая проверяет,
//существует ли в строке str слова word

function findWord(word, str) {
    return str.split(" ").includes(word);
}

console.log(findWord("hello", "hello world")); // true
console.log(findWord("test", "hello world")); // false
