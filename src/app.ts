
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