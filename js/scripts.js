//Business Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.cost = function(){
let toppingsTotal = 0;
const size = new Map ([
  ["Small", 8.00],
  ["Medium", 14.00],
  ["Large", 18.00]
  ]); 
  const toppings = new Map ([
  ["Artisanal Salami", 4.00],
  ["Sausage", 3.00],
  ["Pepperoni", 3.00],
  ["Mushroom", 2.00],
  ["Bell-Peppers", 2.00],
  ["Onions", 1.00]
  ]);
this.toppings.forEach(function(element) {
  toppingsTotal += toppings.get(element)
});
price = size.get(this.size) + toppingsTotal;
return price;
} 

//User Interface

$(document).ready(function() {
  $("#new-pizza").submit(function(event){
  event.preventDefault();
  let pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
  let pizzaToppings = [];
  $("input:checkbox[name=Toppings]:checked").each(function(){
  pizzaToppings.push($(this).val());
  });
  newPizza = new Pizza(pizzaSize, pizzaToppings);
  $("#cost").text(newPizza.cost());
  $("#pizzaOrder").text(pizzaSize + " " + "pizza");
  $("#pizzaDetails").text(pizzaToppings.join(", "));
  });
});
