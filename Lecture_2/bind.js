function ownBind(fn, context) {
    const params = [].slice.call(arguments,2);
    return function () {
        const fnParams = [].slice.call(arguments);
        return fn.apply(context, params.concat(fnParams));
    }
}

const func = function () {
    console.log(this.property);
    console.log(arguments);
};

const a = {
    property: 10
};

const b = ownBind(func, a, 10, 20);

b();