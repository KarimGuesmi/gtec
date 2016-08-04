/**
 * Created by Karim on 28/07/2016.
 */
(function () {

    function appCtrl($scope){
        var $ctrl = this;
        $ctrl.name = 'AppName from appCtrl';

    }

    appCtrl.$inject = ['$scope'];

    angular.module('gtec').controller('appCtrl',appCtrl); // on fait appel a la fonction (config)

})();