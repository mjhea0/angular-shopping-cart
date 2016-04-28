(function(){

  'use strict';

  angular
    .module('shoppingCart.components.item', [])
    .directive('item', function() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'js/components/item/item.view.html',
      controller: 'itemController'
    };
  });

})();