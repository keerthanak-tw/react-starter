// Primitives: number, string, boolean
// Complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 23;
let userName: string = 'KK';
let isInstructor: boolean = true;

// Complex types
let hobbies: Array<string>; // or string[]
let person: {
    name: string;
    age: number;
} = {
    name: userName,
    age,
}

// Type inference
let course = 'React + TypeScript';
// course = 12341; ERRORRRR!