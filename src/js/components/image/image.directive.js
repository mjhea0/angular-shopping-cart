(function(){

  'use strict';

  angular
    .module('shoppingCart.components.image', [])
    .directive('displayImage', function() {
    return {
      restrict: 'E',
      scope: {
        img: '='
      },
      template: '<img class="checkout-image" ng-src="{{img}}">'
    };
  });

})();