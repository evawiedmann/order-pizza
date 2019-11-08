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
    this.price += 30;
  } else if (this.size === 18) {
    this.price +=25;
  } else if (this.size === 14) {
    this.price += 23;
  } else if (this.size === 11) {
    this.price += 20;
  } else if (this.size === 8) {
    this.price += 15;
  }
  return this.price;
};

// User Interface
$(document).ready(function() {


  $("form#order").submit(function(event) {
    event.preventDefault();

    let toppingsInputs = ($("#toppings:checked").val());
    let toppingsArray = [];
    let sizeInput = parseInt($("select#size").val());

    toppingsArray.forEach(function(toppingsInput) {
      toppingsArray.push(toppingsInputs);
    });

    let ourPizza = new Pizza(toppingsArray, sizeInput);
    let price = ourPizza.calcPrice();

    $("#order").hide();
    $('#priceOutput').show();
    $("#output").text(price);
  });
});
