function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw Error('Arguments have to be just numbers');

  const result = a + b + this.c;

  if (isNaN(result) || typeof !== 'number')
    throw Error('Maybe you have some problems with the context? :)');

  console.log(result);
}

bla.c = 10;

