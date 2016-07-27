/**
 * Created by Karim on 27/07/2016.
 */

angular.module('gtec',[]);

angular.module('gtec').controller('gCtrl', function($scope){
    var $ctrl = this;


    $ctrl.name = "nom";
    $ctrl.prenoun = "prenom";


    var list = [
        {name : 'nom5'},
        {name : 'nom2'}
    ];

    $ctrl.list = list;













});



