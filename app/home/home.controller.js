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

        AppService.getQuote().then(function(data){
            $ctrl.quotes = data;
        });

        $ctrl.add = function(){
            var quote = $ctrl.quote;
            AppService.addQuote(quote).then(function(data){
                // $ctrl.quotes = data;
                window.location.reload();
            });
        };


        $ctrl.delete = function(id){
            AppService.deleteQuote(id).then(function(data){    //(quote) dans delete
                // $ctrl.quotes = data;
                window.location.reload();   // Actualiser la page html automatiquement apres cliquer sur delete
            });
        };

        $ctrl.getID = function(id){
            AppService.getTheID(id).then(function(data){    //(quote) dans delete
                // $ctrl.quotes = data;
                window.location.reload();   // Actualiser la page html automatiquement apres cliquer sur delete
            });
        };


    }

    homeCtrl.$inject = ['$scope', 'AppService', 'AppService1'];

    angular.module('gtec').controller('homeCtrl',homeCtrl); // on fait appel a la fonction (config)

})();