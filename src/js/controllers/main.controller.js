(function() {

  angular
    .module('shoppingCart')
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'dataService'];

  function mainController($scope, dataService) {

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