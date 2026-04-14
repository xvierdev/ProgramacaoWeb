let age: number = 5;
const name: string = "Wesley Xavier";
const isValue: boolean = true;
let idk: any = 5;
idk = 'meuovo';

let ids: number[] = [1, 2, 3, 4, 5,];
const booleans: boolean[] = [true, false, false, true];
const names: string[] = ['wesley', 'wilka', 'daphne'];

// tuplas
const person: [number, string] = [1, 'paçoca'];

// lista de tuplas
const people: [number, string][] = [
    [1, 'matheus'],
    [2, 'wilka'],
    [3, 'Juliana Gol']
];

// Intersections
const productId: string | number = 10

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
};

const direction = Direction.Up;

// Type assertions
const productName: any = 'Boné';

// let itemId = productName as string;
let itemId = <string>productName;


console.log(ids);
console.log(Direction.Left);
console.log(itemId);

