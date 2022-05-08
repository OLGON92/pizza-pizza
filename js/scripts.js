//Business Logic
function Pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.cost = function(){
  let totalCost = 0;

  const pizzaSize = new Map ([
    ["Small", 8.00],
    ["Medium", 14.00],
    ["Large", 18.00]
  ]); 

  const pizzaToppings = new Map ([
    ["Artisanal Salami", 4.00],
    ["Sausage", 3.00],
    ["Pepperoni", 3.00],
    ["Mushroom", 2.00],
    ["Bell-Peppers", 2.00],
    ["Onions", 1.00]
  ]);
this.pizzaToppings.forEach(function(element)

