names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        startsWith = [];
        names.forEach(item => {if(item.charAt(0) == letter){startsWith.push(item)}} )
        return startsWith;// names (array) which starts with the letter
    }

    sort() {
        return names.sort(); // names (array) in alphabetical order 
    }

    get() {
        return names; // names (array) in natural order
    }

    getFirst(n) {
        firstNames = [];
        arr.forEach((item, index) => {if(index<n){firstNames.push(item)}} )
        return firstNames; // get first 'n' names (array) 
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



