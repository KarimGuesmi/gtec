/**
 * Created by Karim on 28/07/2016.
 */
(function () {

    var gtecNavCmp = {
           templateUrl : 'app/nav/nav.html',
           controller:ctrl,
           bindings: {
               projectName: '<'
           }
       };


    function ctrl(){
        var $ctrl=this;

        $ctrl.$onInit = function(){
            $ctrl.projectNameLocal = angular.copy($ctrl.projectName);
            $ctrl.config = 'myconfig';
        }
    }


    ctrl.$inject = [];

    angular.module('gtec').component('gtecNavCmp',gtecNavCmp);

})();