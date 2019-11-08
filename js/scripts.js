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
  if (this.size === 12) {
    this.price += 5
  } else if (this.size === 6) {
    this.price += 3;
  }
  return this.price;
};

// User Interface
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    let toppingsInputs = $("#toppings :checked");
    let toppingsArray = [];
    let sizeInput = parseInt($("select#size").val());
    console.log(sizeInput);

    toppingsInputs.forEach(function(toppingsInput) {
      toppingsArray.push(toppingsInput.val());
    })

    let ourPizza = new Pizza(toppingsArray, sizeInput)
    let price = ourPizza.calcPrice();

    $("#order").hide();
    $('#priceOutput').show();
    $("#output").text();
  });
});
