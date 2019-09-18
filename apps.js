'use strict';
//object drills
//object initializers and methods
let loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
};
console.log(`float${loaf.flour}: ${loaf.water}`);
console.log(loaf.hydration());
