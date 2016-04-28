(function() {

  angular
    .module('shoppingCart')
    .config(appConfig);

  function appConfig($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/items.html',
        controller: 'mainController'
      })
      .when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'cartController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();