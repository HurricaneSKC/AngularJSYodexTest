'use strict';

angular.
    module('myApp').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/posts', {
                    template: '<post-list></post-list>'
                }).
                when('/posts/:commentId', {
                    template: '<comment-list></comment-list>'
                }).
                otherwise('/posts');
            }
        ]);
