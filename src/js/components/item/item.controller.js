(function() {

  'use strict';

  angular
    .module('shoppingCart.components.item')
    .controller('itemController', itemController);

  itemController.$inject = ['$scope', 'dataService'];

  function itemController($scope, dataService) {

    $scope.teaList = dataService.getTeas();
    $scope.checkoutQuantity = dataService.getCheckoutQuantity();

    $scope.addToCheckout = function(tea) {
      tea.quantity = parseInt(tea.quantity);
      tea.subtotal = parseFloat(tea.price / 100 * tea.quantity).toFixed(2);
      dataService.addToBag(tea);
      $scope.checkoutQuantity = dataService.getCheckoutQuantity();
    };

    $scope.allCategories = ['dark', 'cold', 'awesome', 'dry', 'hot', 'summer', 'lucid', 'warm', 'winter', 'spring'];

  }

})();