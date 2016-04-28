(function() {

  'use strict';

  angular
    .module('shoppingCart', [
      'ngRoute',
      'shoppingCart.routes',
      'shoppingCart.services',
      'shoppingCart.filters',
      'shoppingCart.components.navbar',
      'shoppingCart.components.item',
      'shoppingCart.components.checkout'
    ]);

})();
