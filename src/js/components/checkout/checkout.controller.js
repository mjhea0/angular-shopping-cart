(function() {

  'use strict';

  angular
    .module('shoppingCart.components.checkout')
    .controller('cartController', cartController);

  cartController.$inject = ['$scope' , 'dataService'];

  function cartController($scope, dataService) {

    $scope.cartItems = dataService.getCheckoutBag();
    $scope.total = dataService.getTotal();
    $scope.cartQuantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    $scope.updateQuantity = function() {
      dataService.updateSubtotal(
        this.checkoutItem._id,
        this.selectedOption
      );
      $scope.cartItems = dataService.getCheckoutBag();
      $scope.total = dataService.getTotal();
    };

    $scope.removeItem = function() {
      dataService.updateSubtotal(this.checkoutItem._id, 0);
      $scope.cartItems = dataService.getCheckoutBag();
      $scope.total = dataService.getTotal();
    };

  }

})();