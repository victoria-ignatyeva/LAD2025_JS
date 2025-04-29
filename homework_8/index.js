// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }
//     getSalary() {
//         return this.rate * this.days;
//     }
//     getFullName() {
//         return this.name + " " + this.surname;
//     }
// }

// const manager = new Worker("Ivan", "Ivanov", 3500, 22);

// console.log("Manager:", manager.getFullName());
// console.log("Salary:", manager.getSalary());

// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.

// class Boss extends Worker {
//     constructor(name, surname, rate, days, workers) {
//         super(name, surname, rate, days);
//         this.workers = workers;
//     }

//     getSalary() {
//         return this.rate * this.days * this.workers;
//     }
// }

// let boss = new Boss("Petr", "Petrov", 5000, 21, 10);

// console.log("Boss:", boss.getFullName());
// console.log("Salary:", boss.getSalary());

// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

// class Worker {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }

//     get rate() {
//         return this._rate;
//     }

//     set rate(value) {
//         if (value > 0) {
//             this._rate = value;
//         } else {
//             console.log("Ставка должна быть больше 0");
//         }
//     }

//     get days() {
//         return this._days;
//     }

//     set days(value) {
//         if (value > 0) {
//             this._days = value;
//         } else {
//             console.log("Количество дней должно быть больше 0");
//         }
//     }

//     getSalary() {
//         if (this._rate !== undefined && this._days !== undefined) {
//             return this._rate * this._days;
//         }
//         return "Значения для расчета зарплаты отсутствуют";
//     }

//     getFullName() {
//         return this.name + " " + this.surname;
//     }
// }

// let manager = new Worker("Maria", "Smirnova");
// manager.rate = 0;
// manager.days = 0;
// console.log(manager.getSalary());

// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки

// class MyString {
//     reverse(str) {
//         return str.split("").reverse().join("");
//     }

//     ucFirst(str) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }

//     ucWords(str) {
//         return str
//             .split(" ")
//             .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" ");
//     }
// }

// let myStr = new MyString();

// console.log(myStr.reverse("hello"));
// console.log(myStr.ucFirst("hello"));
// console.log(myStr.ucWords("hello world"));

// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.

// class Validator {
//     isEmail(str) {
//         const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return emailPattern.test(str);
//     }

//     isDomain(str) {
//         const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return domainPattern.test(str);
//     }

//     isDate(str) {
//         const datePattern = /^\d{4}-\d{2}-\d{2}$/;
//         return datePattern.test(str);
//     }

//     isPhone(str) {
//         const phonePattern = /^\+?[1-9]\d{1,14}$/;
//         return phonePattern.test(str);
//     }
// }

// const validator = new Validator();

// console.log(validator.isEmail("test@example.com"));
// console.log(validator.isDomain("example.com"));
// console.log(validator.isDate("2025-04-29"));
// console.log(validator.isPhone("+1234567890"));

// console.log(validator.isEmail("test@com"));
// console.log(validator.isDomain("example"));
// console.log(validator.isDate("2025/04/29"));
// console.log(validator.isPhone("1234567890"));

// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date

// class User {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName() {
//         return this.name + " " + this.surname;
//     }
// }

// class Student extends User {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     }

//     getCourse() {
//         let today = new Date();
//         let currentYear = today.getFullYear();
//         return currentYear - this.year;
//     }
// }

// let student = new Student("Maria", "Ivanova", 2022);
// console.log(student);
// console.log("Полное имя:", student.getFullName());
// console.log("Курс", student.getCourse());
