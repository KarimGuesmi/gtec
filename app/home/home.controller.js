/**
 * Created by Karim on 28/07/2016.
 */
(function () {

    function homeCtrl($scope, AppService, AppService1){
        var $ctrl = this;
        $ctrl.name = 'GTEC';

        AppService1.getAll().then(function(data){
            $ctrl.list = data;
        });
    }

    homeCtrl.$inject = ['$scope', 'AppService', 'AppService1'];

    angular.module('gtec').controller('homeCtrl',homeCtrl); // on fait appel a la fonction (config)

})();