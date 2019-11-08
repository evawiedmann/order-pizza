// Business Logic
function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.calcPrice = function () {
  this.toppings.forEach(function(toppings) {
    this.price += 1;
  })
  if (this.size === 24) {
    this.price += 9;
  } else if (this.size === 18) {
    this.price +=7;
  } else if (this.size === 14) {
    this.price += 5;
  } else if (this.size === 11) {
    this.price += 3;
  } else if (this.size === 8) {
    this.price += 3;
  }
  return this.price;
};

// User Interface
$(document).ready(function() {

 let toppingsArray = [];

  $("form#order").submit(function(event) {
    event.preventDefault();

    let toppingsInputs = $("input:checked").val();
    let sizeInput = $("select#size").val();

  for(var i = 0; i < toppingsArray.length; i++) {
        toppingsArray.push(toppingsInput);
      };

      let ourPizza = new Pizza(toppingsArray, sizeInput);
      console.log(ourPizza);
      let price = ourPizza.calcPrice();
      console.log(toppingsArray);

      $("#order").hide();
      $('#priceOutput').show();
      $("#output").text(price);
    });
  });
