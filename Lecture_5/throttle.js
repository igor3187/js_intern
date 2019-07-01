/*
 * callback - функция которую нужно обернуть
 * time - время в миллисекундах
 */
function throttle(callback, time) {

    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        callback.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, time);
    }

    return wrapper;
}

let count = 0;

function func() {
    count++;
    console.log('Function called', count, 'times');
}

let tr = throttle(func, 1000);

    setTimeout(() => {
        tr();
        tr();
        tr();
    }, 3100)

tr();
tr();
tr();
tr();
tr();
tr();
tr();
tr();
tr();