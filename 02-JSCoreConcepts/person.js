class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    show(){
        console.log(`${name} ${surname.toUpperCase()}`)
    }

    showInitials(){
        console.log(`${name.charAt(0)}.${surname.charAt(0)}.`)
    }
}

let janek = Person("Jan", "Nowak");
console.log(janek.show());
console.log(janek.showInitials());

let me = Person("Tomek", "Zapiórkowski");
console.log(me.show());
console.log(me.showInitials());