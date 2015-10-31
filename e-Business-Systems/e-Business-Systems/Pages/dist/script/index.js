requirejs.config({
    baseUrl: '/pages/dist/script',
    paths: {
        jquery: 'lib/jquery/jquery',
        angular: 'lib/angularjs/angular'
    },
    skim: {
        angular: { exports: 'angular' }
    }
});
require(['jquery'], function ($) {
    $(document).ready(function () {
        //console.log("requirejs -> jquery -> document ready.");
    });
});

// require(['angular'], function(ng){
//     ng.bootstrap(document, ['myApp']);
// });

// define(['angular'], function (ng) {
//     ng.module('myApp', [])
//         .controller('myController', [
//             '$scope', function ($scope) {
//                 $scope.name = 'it is angularjs bind data';
//             }
//         ]);

//     // ng.element(document).ready(function () {
//     //     ng.bootstrap(document, ['myApp']);
//     // });
// });