const user1 = {
    id: 4451234,
    name: "Inma",
    age: 35,
};
const user2 = {
    name: "Manuel",
    age: 41,
};
const teachers = ["Lissette", "Jaime", "Victor", "Dani"];
const colors = ["amarillo", "verde", "rojo", "azul", "rosa", "Amaranto", "aguamarina", "naranja", "morado"];
const colorsA = ["amarillo", "azul", "amaranto", "aguamarina"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const string1 = "Amarilloverderojoazulrosa";

// hasId
const hasId = ({ id: userId }) => (userId ? true : false);
console.log(hasId(user1));
console.log(hasId(user2));

// head
const head = ([first]) => first;
console.log(head(teachers));

// tail
const tail = ([, ...rest]) => rest;
console.log(tail(teachers));

// swapFirstToLast
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(teachers));

// excludeId
const excludeId = ({ id, ...rest }) => ({...rest });
console.log(excludeId(user1));
console.log(excludeId(user2));

// wordsStartingWithA
const wordsStartingWithA = ([words]) => ([words]).filter(word => word[0].toLowerCase() === "a");
console.log(wordsStartingWithA(colors));

// concat
const concat = (...words) => words.join(" | ");
console.log(concat('Hola', 'Hello', 'Bonjour', 'Hallo', 'Olá', 'Ciao'));

// multArray
const multiArray = (arr, x) => arr.map(element => element * x);
console.log(multiArray(numbers, 2));

// calcMult
const calcMult = (...numbers) => numbers.reduce((multNumbers, n) => multNumbers * n, 1);
console.log(calcMult(2, 4, 5));

// swapFirstSecond
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log(swapFirstSecond(teachers));

// // firstEqual
// // usar EVERY - REVISAR PARA HACERLO SIN [0]
// const firstEqual = (character, ...strings) => strings.every(string => (string[0] === character));
// console.log(firstEqual('a', ("amarillo", "verde", "rojo", "azul", "rosa")));
// console.log(firstEqual('a', ("amarillo", "azul", "amaranto", "aguamarina")));


// longest
// usar FIND y FILTER?? o SORT??? ordenar y sacar el más largo??
// const longest = ([...myArray]) => myArray.sort((arrayA, arrayB) => (arrayA.length > arrayB.length ? arrayA : arrayB));
// console.log(longest(colorsA, numbers));

// searchInStringV1 - REVISAR PARA HACERLO CON REDUCE
// const searchInStringV1 = (string, character) => Array.from(string).filter(letter => letter === character).reduce(() => , 0);
// console.log(searchInStringV1(string1, 'a'));

// searchInStringV2
const searchInStringV2 = (string, character) => Array.from(string).filter(letter => letter === character).length;
console.log(searchInStringV2(string1, 'a'));

// sortCharacters
const sortCharacters = string => Array.from(string).sort();
console.log(sortCharacters(string1));

// shout
const shout = words => words.map(word => (`¡${word}!`)).join('').toUpperCase();
console.log(shout(colors));

// Lista de la compra
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];