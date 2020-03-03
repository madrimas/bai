class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    show() {
        console.log(`${this.name} ${this.surname.toUpperCase()}`)
    }

    showInitials() {
        console.log(`${this.name.charAt(0)}.${this.surname.charAt(0)}.`)
    }
}

let janek = new Person("Jan", "Nowak");
janek.show();
janek.showInitials();

let me = new Person("Tomek", "Zapiórkowski");
me.show();
me.showInitials();