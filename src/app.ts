
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

// Number tipas ir panaudijimas funkcijoje
const pizzaCost: number = 10;
const pizzaToopings = 6;

function calculatePrice(cost: number, toppings:number): number {
return cost + 1.5 * toppings;
}

const cost = calculatePrice(pizzaCost, pizzaToopings);
console.log(`Pizza costs: ${cost}`);

