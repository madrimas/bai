// boki trójkąta
a = 3;
b = 4;
c = 5;
h = 7;

// Pole trójkąta o bokach ..., ... oraz ... wynosi ... .

let p = () => (Math.sqrt((a + b + c) * (a + b - c) * (a - b + c) * (-a + b + c)) / 4);

console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${p()}.`);