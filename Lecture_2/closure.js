function highLoadPerformance(a) {
    if (isNaN(a) || typeof a !== 'number') throw Error('Only number allowed');
    // Imagine that is this function is very high loaded.
    console.log(a);
    return a + 1;
}

function memoize(fn) {
    const cache = {};
    return function (x) {
        if (cache.hasOwnProperty(x)) {
            console.log("return from cache: ", cache[x])
            return cache[x];
        } else {
            const result = fn(x);
            cache[x] = result;
            console.log("return from function: ", result)
            return result;
        }
    }
}

const memoized = memoize(highLoadPerformance);

memoized(10);
memoized(10);
