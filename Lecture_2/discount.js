const makeDiscount = (percent) => {
  return price => price * percent / 100;
};

const discount10 = makeDiscount(10);
const discount90 = makeDiscount(90);

console.log(discount10(450));
console.log(discount90(450));