let max = 20;
let min = 5;
let random = () => (Math.floor(Math.random() * (max - min + 1)) + min);

numbers = [random(), random(), random(), random(), random(),
random(), random(), random(), random(), random()];

numbers.forEach(element => {
    console.log(element);
});