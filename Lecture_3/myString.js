class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    ucWords(str) {
        return str.split(' ').map(string => this.ucFirst(string)).join(' ');
    }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'
