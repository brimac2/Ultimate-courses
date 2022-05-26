
// Array pvz:
const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map(pizza => {
    return pizza.name.toUpperCase();
});

const pizza = {
    name: 'Blazing Inferno',
    getName: () => pizza.name,
    
};
console.log(pizza.getName());


// Sukurti nauja objekta, panaudojant jau turima objekta
const drink = {
    name: 'Fanta',
    price: 2
}

const ingredients = ['sugar'];

function createOrder(drink, ingredients) {
     return {drink, ingredients };
}

console.log(createOrder(drink, ingredients))

// Kad perduoti kintamajam (variablui) bet kokius skaičius ar ir skačius, message naudojam .reduce

function sumAll(message, ...arr){
    console.log(message)
return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('Hello', 1,2,3,4,5)
console.log(sum);

// Spread operator, kai galima isskaidyti objekta i properties (priekyje padedami ...)
const chocolade = {
    name: 'milka'
};

const component = ['sugar'];
const order = {
...chocolade, component
}

const finalOrder = {...order}
console.log(finalOrder)

// Destructuring array, prasome propercio is objekto
const pizzzza = {
    name: 'Hawaii',
    toppings: ['pinapple'],
};

function orderPizza({name: pizzaName, toppings: pizzaToppings}) {
    return {pizzaName, pizzaToppings};
}

const {pizzaName} = orderPizza(pizzzza);
const toppings = ['pinapple', 'bacon', 'chilli'];
const [first, second, third] = toppings;

function logToppings ([first, second, third]: any) {
    console.log(first, second, third)
}

logToppings(toppings);


// Number tipas ir panaudijimas funkcijoje
const pizzaCost: number = 10;
const pizzaToopings = 6;

function calculatePrice(cost: number, toppings:number): number {
return cost + 1.5 * toppings;
}

const cost = calculatePrice(pizzaCost, pizzaToopings);
console.log(`Pizza costs: ${cost}`);


// String tipas ir panaudojimas funkcijoje
const coupon: string = 'pizza25';

function normalizeCoupon (code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);


// Boolean tipas ir panaudojimas funkcijoje
const pizzza: number = 2;

function offerDiscount(orders: number): boolean {
    return orders >=3;
}

if (offerDiscount(pizzza)) {
console.log(`You are entitled to a discount`)
} else {
    console.log(`Order more than 3 pizzzas`)
}

// Union ir literal types
let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'):void {
    pizzaSize = size;
}

selectSize('medium');
console.log(`Pizza size: ${pizzaSize}`)

// Function types
let sumOrder: (price: number, quantity: number) => number;
sumOrder = (x, y) => x * y;

const allSum = sumOrder(20, 3);
console.log(`Total sum: ${allSum}`);

// Make optional arguments in function
let sumOrderr: (price: number, quantity?: number) => number;
sumOrderr = (x, y) => {
    if (y){
        return x * y;
    } 
    return x;
}
const allSumm = sumOrderr(20);
console.log(`Total sum: ${allSum}`);

// Typed functions
let sumOrderrr: (price: number, quantity?: number) => number;
sumOrderrr = (x, y = 1) => x * y;
const ssum = sumOrderrr(26);
console.log(`Total summmm: ${ssum}`);

// Object types
let pica: {name: string, price: number; getName(): string } = {
    name: 'plain old pica',
    price: 20,
    getName(){
        return pica.name;
    }
}
console.log(pica.getName())

// Array types and generics
const sizes = ['small', 'medium', 'large'];

let size: Array <number>;
size = [1, 2, 3];

// Tuple Types for array
let piccca: [string, number, boolean]
piccca = ['peperoni', 20, true];


// Type assertion in JSON string
type Piiza = { name: string, toppings: number};

const piiza: Piiza = {name: 'Inferno', toppings: 5}

const serialized = JSON.stringify(piiza);

function getNameFromJSON(obj: string) {
    return (<Piiza>JSON.parse(obj) as Piiza).name
}

getNameFromJSON(serialized);