/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
let timer = null;
function debounce(callback, time) {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(callback, time);
}

let count = 0;
function func() {
    count++;
    console.log('Function called', count, 'times');
}

debounce(func, 1000);
debounce(func, 1000);

setTimeout(function () {
    debounce(func, 1000);
}, 5100);
setTimeout(function () {
    debounce(func, 1000);
}, 5900);

