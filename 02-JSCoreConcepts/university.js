names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter) {
        let startsWith = [];
        this.names.forEach(item => { if (item.charAt(0) == letter) { startsWith.push(item) } });
        return new Students(startsWith);// names (array) which starts with the letter
    }

    sort() {
        let sortedNames = [];
        this.names.forEach(item => sortedNames.push(item));
        sortedNames.sort();
        return new Students(sortedNames); // names (array) in alphabetical order 
    }

    get() {
        return new Students(this.names); // names (array) in natural order
    }

    getFirst(n) {
        let firstNames = [];
        this.names.forEach((item, index) => { if (index < n) { firstNames.push(item) } });
        return new Students(firstNames); // get first 'n' names (array) 
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



