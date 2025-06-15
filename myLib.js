 export class Animal {
  name: string = "";
  age: number;
  isCute: boolean = true;

  constructor(name, age, isCute) {
    this.name = name;
    this.age = age;
    this.isCute = isCute;
  }

  printAnimal() {
    console.log("name: " + this.name);
    console.log("age: " + this.age);
    console.log("isCute: " + this.isCute);
  }
}


