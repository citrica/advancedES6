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
console.log("Exercise hasId:")
const hasId = ({ id: userId }) => (userId ? true : false);
console.log(hasId(user1));
console.log(hasId(user2));

// head
console.log("Exercise head:")
const head = ([first]) => first;
console.log(head(teachers));

// tail
console.log("Exercise tail:")
const tail = ([, ...rest]) => rest;
console.log(tail(teachers));

// swapFirstToLast
console.log("Exercise swapFirstToLast:")
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(teachers));

// excludeId
console.log("Exercise excludeId:")
const excludeId = ({ id, ...rest }) => ({...rest });
console.log(excludeId(user1));
console.log(excludeId(user2));

// wordsStartingWithA
console.log("Exercise wordsStartingWithA:")
const wordsStartingWithA = ([words]) => ([words]).filter(word => word[0].toLowerCase() === "a");
console.log(wordsStartingWithA(colors));

// concat
console.log("Exercise concat:")
const concat = (...words) => words.join(" | ");
console.log(concat('Hola', 'Hello', 'Bonjour', 'Hallo', 'Olá', 'Ciao'));

// multArray
console.log("Exercise multArray:")
const multiArray = (arr, x) => arr.map(element => element * x);
console.log(multiArray(numbers, 2));

// calcMult
console.log("Exercise calcMult:")
const calcMult = (...numbers) => numbers.reduce((multNumbers, n) => multNumbers * n, 1);
console.log(calcMult(2, 4, 5));

// swapFirstSecond
console.log("Exercise swapFirstSecond:")
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log(swapFirstSecond(teachers));

// firstEqual
// No he conseguido hacerlo sin el [0]
console.log("Exercise firstEqual:")
const firstEqual = (character, ...strings) => strings.every(string => (string[0] === character));
console.log(firstEqual('a', ("amarillo", "verde", "rojo", "azul", "rosa")));
console.log(firstEqual('a', ("amarillo", "azul", "amaranto", "aguamarina")));


// longest
// console.log("Exercise longest:")
// const longest = ([...myArray]) => myArray.XXXX
// console.log(colorsA, colors

// searchInStringV1
// console.log("Exercise searchInStringV1:")
// const searchInStringV1 = (string, character) => Array.from(string).reduce( =>, 0);
// console.log(searchInStringV1(string1, 'a'));

// searchInStringV2
console.log("Exercise searchInStringV2:")
const searchInStringV2 = (string, character) => Array.from(string).filter(letter => letter === character).length;
console.log(searchInStringV2(string1, 'a'));

// sortCharacters
console.log("Exercise sortCharacters:")
const sortCharacters = string => Array.from(string).sort();
console.log(sortCharacters(string1));

// shout
console.log("Exercise shout:")
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

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const addVat = (cart) => cart.map(product => ({...product, vat: (product.price * 0.21).toFixed(2) }));
console.log(addVat(shoppingCart));

// B. Ordena la lista de más a menos unidades.
const sortByUnits = cart => cart
    .sort((a, b) => (a.units < b.units ? 1 : -1))
    .map(product => product)
console.log(sortByUnits(shoppingCart))

// C. Obtén el subtotal gastado en droguería.
const getSubtotal = cart => cart
    .filter(product => product.category === "Droguería")
    .reduce((total, product) => total + (product.price * product.units), 0).toFixed(2);
console.log(getSubtotal(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría 
// Nota Inma: Categorías ordenadas alfabéticamente: 1. Carne y Pescado, 2. Droguería, 3. Fruta y Verdura)
const getProductAndTotalPrice = cart => cart
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .map(product => ({ product: product.product, price: product.price * product.units }))
console.log(getProductAndTotalPrice(shoppingCart));