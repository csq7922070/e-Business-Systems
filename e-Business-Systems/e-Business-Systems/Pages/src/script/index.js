requirejs(['jquery', 'angular'], function ($, ng) {
    $(document).ready(function () {
        //alert("requirejs -> jquery -> document ready.");
    });
});

define(['angular'], function (ng) {
    ng.module('myApp', [])
        .controller('myController', [
            '$scope', function ($scope) {
                $scope.name = 'it is angularjs bind data';
            }
        ]);

    ng.element(document).ready(function () {
        ng.bootstrap(document, ['myApp']);
    });
});