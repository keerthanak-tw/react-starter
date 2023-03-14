// Primitives: number, string, boolean
// Complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 23;
let userName: string = 'KK';
let isInstructor: boolean = true;

// Complex types
type Person = {
    name: string;
    age: number;
}
let hobbies: Array<string>; // or string[]
let person: Person = {
    name: userName,
    age,
}
const people: Person[] = [
    { name: 'KK', age: 24 },
    { name: 'JK', age: 23 },
]
// Type inference
let course = 'React + TypeScript';
// course = 12341; ERRORRRR!

let project : string | number = 'Project name';
project = 123; // No error as type is union

// Functions and types
const addedResult = (a: number, b: number): number => {
    return a + b;
}
// return type inferred and is not required to be specified in simple cases

const printOutput = (value: any): void => {
    console.log(value);
}
// void is only used as types for return value of funtions that doesnt return anything

