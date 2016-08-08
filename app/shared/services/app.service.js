/**
 * Created by Karim on 02/08/2016.
 */

(function () {

    function AppService($http, $q){
        return  {
            getAll : getAll,
            getQuote : getQuote,
            addQuote : addQuote,
            deleteQuote : deleteQuote
        };

        function getAll(){
            var d = $q.defer();
            $http.get('app/shared/data/data.json').then(function(response){
                d.resolve(response.data);
            });
            return d.promise;
        }

        function getQuote(){
            var d = $q.defer();
            $http.get('http://localhost:3412/').then(function(response){
                d.resolve(response.data);
            });
            return d.promise;
        }

        function addQuote(data){
            var d = $q.defer();
            $http.post('http://localhost:3412/quote', data).then(function(response){
                d.resolve(response.data);
            });
            return d.promise;
        }

        function deleteQuote(id){
            var d = $q.defer();
            $http.delete('http://localhost:3412/quote/'+id).then(function(response){
                d.resolve(response.data);
            });
            return d.promise;
        }

        function getTheID(id){
            var d = $q.defer();
            $http.getID('http://localhost:3412/quote/'+id).then(function(response){
                d.resolve(response.data);
            });
            return d.promise;
        }


    }

    AppService.$inject = ['$http','$q'];

    angular.module('gtec').factory('AppService',AppService); // on fait appel a la fonction (config)


})();