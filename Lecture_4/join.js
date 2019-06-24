function join(array, separator) {
    let str = '';
    for (let i in array) {
        str += array[i];
        if (i < array.length - 1) {
            str += separator;
        }
    }
    return str;
}

const array = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];

console.log(join(array, ' '));
