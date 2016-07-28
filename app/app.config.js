/**
 * Created by Karim on 28/07/2016.
 */
(function () {

    function config($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'app/home/home.html',
                controller: 'homeCtrl',
                controllerAs:'vm'
            })

            .when('/about',{
                templateUrl: 'app/about/about.html',
                controller: 'aboutCtrl',
                controllerAs:'vm'
            })

            .otherwise({redirectTo: '/'});
    }

    config.$inject = ['$routeProvider'];
    angular.module('gtec').config(config); // on fait appel a la fonction (config)


})();