// Your code here
class Cat {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
       return `${this.name} says woof!`;
    }

}


class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        if (this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`;
        }else
        {
        return `${this.name} says squawk!`;
        }
}
}
let cat, dog, bird, bird2;
cat = new Cat("Sasha", "female");
dog = new Dog("Rufio", "male");
bird = new Bird("Pablo", "male"); 
bird2 = new Bird("Mable", "female");
cat.speak();
dog.speak();
bird.speak();
bird2.speak();
