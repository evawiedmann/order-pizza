// Business Logic
function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.calcPrice = function () {
    this.price += 2*this.toppings.length;
  if (this.size === 24) {
    this.price += 24;
  } else if (this.size === 20) {
    this.price +=20;
  } else if (this.size === 16) {
    this.price +=16;
  } else if (this.size === 14) {
    this.price +=14;
  } else if (this.size === 8) {
    this.price += 8;
  };
};

// User Interface

$(document).ready(function() {
  $("form#order").submit(function(event) {
    let toppingsInputs = [];
    event.preventDefault();
    $("input:checkbox[name=topping]:checked").each(function(){
      toppingsInputs.push($(this).val());
    });
    let sizeInput = parseInt($("select#size").val());
    let ourPizza = new Pizza(toppingsInputs, sizeInput);
    ourPizza.calcPrice();

    $("#order").hide();
    $('#priceOutput').show();
    $("#output").text(ourPizza.price);
  });
});
