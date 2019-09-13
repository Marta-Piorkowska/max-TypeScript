//  simple generic
function echo(data: any) {
    return data;
}

console.log(echo('max'));
console.log(echo(25));
console.log(echo({ name: 'max', age: 25 }));

// better generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho('max').length);
console.log(betterEcho<number>(25));
console.log(betterEcho({ name: 'max', age: 25 }));

// A built-in Generic

// array is a generic type by the default
const testResult: Array<number> = [1.2, 5, 66];

testResult.push(-2, 8);
console.log(testResult);

// Arrays
function printAll<T>(arg: T[]) {
    arg.forEach((element) => console.log(element));
}
printAll<string>(['apple', 'banana', 'orange']);


// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('somethingggggg'));

// Generic Class
class SimpleClass<T> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleClass = new SimpleClass();
simpleClass.baseValue = 99;
simpleClass.multiplyValue = 1;
console.log(simpleClass.calculate());

class AdwancedClass<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
const adwancedClass = new AdwancedClass();
simpleClass.baseValue = 99;
simpleClass.multiplyValue = 1;
console.log(simpleClass.calculate());

class SuperAdwancedClass<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
const superEdwancedClass = new SuperAdwancedClass<string, number>();
simpleClass.baseValue = '99';
simpleClass.multiplyValue = 1;
console.log(simpleClass.calculate());
