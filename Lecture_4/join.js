/*function join(array, separator) {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i];
        if ((separator) && i < array.length - 1) {
            str += separator;
        } else if (i < array.length - 1) {
            str = str.concat("-");
        }
    }
    return str;
}*/

const join = (arr, sep) => {
    if (sep === undefined) return arr + '';
    return arr.reduce((res, item, i) => {
        return i === 0 ? item : `${res}${sep}${item}`;
    }, '')
};

const array = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit'];
console.log(join(array, "-"));

