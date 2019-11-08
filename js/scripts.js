// Business Logic

function Pizza(toppings,size) {
this.toppings = toppings;
this.size = size;
this.price = 0;
}

Pizza.prototype.calcPrice = function () {
  this.toppings.forEach(function(toppings) {
    this.price += 1;
  }
  if (this.size === 12) {
this.price += 5
} else if (this.size === 6) {
  this.price += 3;
}
return this.price;
)
};


// User Interface

$(document).ready(function() {
  $("form#").submit(function(event) {
    event.preventDefault();

    });
  });
});
