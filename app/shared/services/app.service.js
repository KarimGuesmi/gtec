/**
 * Created by Karim on 02/08/2016.
 */

(function () {

    function AppService($http, $q){
        return  { getAll : getAll };

        function getAll(){
            //return [1,2,3,4]; ou
            /*
            return [{id:1, name:'name1'},
                    {id:2, name:'name2'}];
            */

            var d = $q.defer();

            $http.get('app/shared/data/data.json').then(function(response){
                //return response;
                d.resolve(response.data);
            });
            return d.promise;
       }
    }

    AppService.$inject = ['$http','$q'];

    angular.module('gtec').factory('AppService',AppService); // on fait appel a la fonction (config)


})();