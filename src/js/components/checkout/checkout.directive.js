(function(){

  'use strict';

  angular
    .module('shoppingCart.components.checkout', [])
    .directive('checkout', function() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'js/components/checkout/checkout.view.html',
      controller: 'cartController'
    };
  });

})();