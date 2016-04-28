(function() {

  'use strict';

  angular
    .module('shoppingCart.routes', [])
    .config(appConfig);

  function appConfig($routeProvider){
    $routeProvider
      .when('/', {
        template: '<item></item>'
      })
      .when('/checkout', {
        template: '<checkout></checkout>',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();