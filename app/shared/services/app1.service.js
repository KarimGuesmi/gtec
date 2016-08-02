/**
 * Created by Karim on 02/08/2016.
 */

(function () {

    function AppService($http, $q){


        this.getAll=function(){
            var d = $q.defer();

            $http.get('app/shared/data/data.json').then(function(response){
                //return response;
                d.resolve(response.data);
            });
            return d.promise;
       }
    }

    AppService.$inject = ['$http','$q'];

    angular.module('gtec').service('AppService1',AppService); // on fait appel a la fonction (config)

})();