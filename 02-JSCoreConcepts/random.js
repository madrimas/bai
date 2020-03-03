let random = () => (Math.floor(Math.random() * 20) + 5);

numbers = [random(), random(), random(), random(), random(), 
    random(), random(), random(), random(), random()];

numbers.forEach(element => {
    console.log(element);
});