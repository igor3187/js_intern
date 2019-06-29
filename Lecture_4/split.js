function split(string, separator, limit) {
    let result = [];
    let tempString = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== separator) {
            tempString += string[i];
            if (i === string.length - 1) {
                result.push(tempString);
            }
        } else {
            result.push(tempString);
            tempString = '';
        }
    }
    return result;
}

const string = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

console.log(split(string, ' ', 8));
