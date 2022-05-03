const user1 = {
    id: 4451234,
    name: "Inma",
    age: 35,
};

const user2 = {
    name: "Manuel",
    age: 41,
};

// hasId
const hasId = ({...user }) => (user.id ? true : false);
console.log(hasId(user1));
console.log(hasId(user2));

const teachers = ["Lissette", "Jaime", "Victor", "Dani"];

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


const colors = ["amarillo", "verde", "rojo", "azul", "rosa", "Amaranto", "aguamarina", "naranja", "morado"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

// wordsStartingWithA
const wordsStartingWithA = words => words.filter(word => word[0].toLowerCase() === "a");
console.log(wordsStartingWithA(colors));

// concat
const concat = words => words.reduce((words, word) => words + " | " + word, "");
console.log(concat(colors));

// multArray
const multiArray = (arr, x) => arr.map(element => element * x);
console.log(multiArray(numbers, 2));

// calcMult