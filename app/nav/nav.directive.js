/**
 * Created by Karim on 28/07/2016.
 */
(function () {

    function navCtrl(){
       return{
           restrict: 'EA',
           templateUrl : 'app/nav/nav.html',
           scope: {
               projectName: '<',
           },
           controller: ctrl,
           controllerAs: '$ctrl'
       };
    }


    function ctrl(){
        var $ctrl=this;
        $ctrl.config= 'myConfig';
    }

    navCtrl.$inject = [];

    angular.module('gtec').directive('gtecNav',navCtrl);

})();