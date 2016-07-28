/**
 * Created by Karim on 28/07/2016.
 */

(function () {

    function aboutCtrl($scope){
        var $ctrl = this;
        $ctrl.name = 'About';
    }

    aboutCtrl.$inject = ['$scope'];

    angular.module('gtec').controller('aboutCtrl',aboutCtrl); // on fait appel a la fonction (config)


})();