// Business Logic
function Pizza(toppings,size) {
  this.toppings = [];
  this.size = size;
  this.price = 0;
}

Pizza.prototype.calcPrice = function () {
  this.toppings.forEach(function(topping) {
    this.price += 1;
  })
  if (this.size === 24) {
    this.price += 30;
  } else if (this.size === 14) {
    this.price += 22;
  } else if (this.size === 8) {
    this.price += 15;
  }
  return this.price;
};

// User Interface
$(document).ready(function() {


  $("form#order").submit(function(event) {
    event.preventDefault();

    let toppingsArray = [];
    let toppingsInputs = $("#toppings:checked");
    let sizeInput = $("select#size").val();
    toppingsInputs.forEach(function(toppingsInput) {
      toppingsArray.push(toppingsInput.val());
    });

    let ourPizza = new Pizza(toppingsArray, sizeInput);
    console.log(ourPizza);
    let price = ourPizza.calcPrice();

    $("#order").hide();
    $('#priceOutput').show();
    $("#output").text(price);
  });
});
