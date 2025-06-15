class Animal {
    constructor(name, age, isCute) {
        this.name = name;
        this.age = age;
        this.isCute = isCute;
    }

    printAnimal() {
        console.log("name:", this.name);
        console.log("age:", this.age);
        console.log("isCute:", this.isCute);
    }
}

window.Animal = Animal; // הפיכת המחלקה לגלובלית
