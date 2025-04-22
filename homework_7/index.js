// 1. Что выведет функция?
// function f() {
// alert(this);
// }
// let user = {
//g: f.bind(null),
// };
// user.g();

// f.bind(null) привязывает контекст this функции f к null, функция выведет null

// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();

//bind нельзя повторно привязать на уже привязанную функцию

// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind?
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });

// у новой  функции bound не будет свойства test, так как оно не копируется

// function askPassword(ok, fail) {
//     let password = prompt("Password?", ');
//     if (password == "rockstar") ok();
//     else fail();
//     }
//     let user = {
//     name: 'Вася',
//     loginOk() {
//     alert(`${this.name} logged in`);
//     },
//     loginFail() {
//     alert(`${this.name} failed to log in`);
//     },
//     };
//     askPassword(user.loginOk, user.loginFail);

// ошибка происходит из-за потери контекста this при передаче методов объекта, чтобы его сохранить нужно использовать bind(user)

// 5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
// let password = prompt("Password?", ');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
// askPassword(?, ?);

//askPassword(user.login.bind(user, true), user.login.bind(user, false));

// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = {value: ‘Привет’}
// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }
// //Тут напишите конструкцию с bind()
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов
// Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров
// Петр'

// const bound = func.bind(elem);

// 7. Есть функция которая складывает три числа.Выполните
// каррирование.
// const sum = (a, b, c) => a + b + c

// const currySum = (a) => (b) => (c) => a + b + c;
// console.log(currySum(1)(2)(3)); // 6

// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два  аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера.

function timer(start, end) {
    let current = start;
    return function tick() {
        if (current >= end) {
            console.log(current);
            current--;
            setTimeout(tick, 1000);
        } else {
            console.log("Таймер завершен!");
        }
    };
}

const timerInstance = timer(10, 0);
timerInstance();
