// Creating a Class Decorator

// dekorator
function logged(constructiorFn: Function) {
    console.log(constructiorFn);
};

// klasa do której jest dołączony dekorator
@logged
class Brother {
    constructor() {
        console.log('Hi!');
    }
}

// Factorie
function logging(value: boolean) {
    return value ? logged : null;
};

@logging(true)
class Bike {
}

// Advanced
function printable(constructionFn: Function) {
    constructionFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(true)
@printable
class Flower {
    name = 'Monstera Deliciosa Alba'
}

const flower = new Flower;
(<any>flower).print();

// Method Decorators
// Property Decorators
function editable(value: boolean) {
    return function (target: any, propName: string, description: PropertyDescriptor) {
        description.writable = value;
    }
}

function overwritable(value: boolean) {
    return function (target: any, ptopName: string): any {
        const descriptor: PropertyDescriptor = {
            writable: value
        }
        return descriptor;
    }
}

class Monstera {
    @overwritable(true) // Property Decorators
    monsteraName: string;

    constructor(name: string) {
        this.monsteraName = name;
    }

    @editable(false) // Method Decorators
    calcMonstera() {
        console.log(1000);
    }
}

const monstera = new Monstera('Alba');
monstera.calcMonstera();
monstera.calcMonstera = function () {
    console.log(3500);
}
monstera.calcMonstera();

// Parameter Decorators

function printInfo(target: any, methodName: string, paramindex: number) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramindex: ", paramindex);

}

class Horse {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printAllHorses(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(50);
        } else {
            console.log(7);
        }
    }
}

const horse = new Horse('Dumka');
horse.printAllHorses("anything", true);
horse.printAllHorses("anything", false);

