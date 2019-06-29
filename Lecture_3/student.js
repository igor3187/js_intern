class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        // В es6 есть так называемые template string,
        // в которых с помощью ${} можно указывать переменные
        return `${this.name} ${this.surname}`
    }
}

class Student extends User {

    constructor(name, surname, courseIndtfc, year) {
        super(name, surname);
        this._name = name;
        this._surname = surname;
        this._courseIndtfc = courseIndtfc;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get surname() {
        return this._surname;
    }

    set surname(value) {
        this._surname = value;
    }

    get courseIndtfc() {
        return this._courseIndtfc;
    }

    set courseIndtfc(value) {
        this._courseIndtfc = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    getYear() {
        this.year = 2016;
        return this.year;

    }

    getFullName() {
        return super.getFullName(this._name, this._surname);
    }

    getCourse(value) {
        value = new Date(2019) - this.courseIndtfc;
        console.log("Student who was starting to learn in " + this.getYear() + " and who's name is " + this.getFullName() + " is on " + value + "rd course now. ")
        return "current course is: " + value;
    }

}

const student = new Student('Вася', 'Пупкин', 2016);

console.log(student.name); //выведет 'Вася'
console.log(student.surname); //выведет 'Пупкин'
console.log(student.getFullName()); //выведет 'Вася Пупкин'
console.log(student.getYear()); //выведет 2016
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2019
