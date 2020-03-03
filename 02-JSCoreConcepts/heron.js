// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let p = () => (Math.sqrt((a+b+c)*(a+b-c)*(a-b+c)*(-a+b+c)/4));

console.log(`Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${p()}.`);