(function(){

  'use strict';

  angular
    .module('shoppingCart.components.navbar', [])
    .directive('navBar', function() {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'js/components/nav-bar/nav-bar.view.html'
    };
  });

})();