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