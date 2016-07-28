/**
 * Created by Karim on 28/07/2016.
 */
(function () {

    function homeCtrl($scope){
        var $ctrl = this;
        $ctrl.name = 'GTEC';
    }

    homeCtrl.$inject = ['$scope'];

    angular.module('gtec').controller('homeCtrl',homeCtrl); // on fait appel a la fonction (config)


})();