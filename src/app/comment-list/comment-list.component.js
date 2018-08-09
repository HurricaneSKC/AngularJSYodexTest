'use strict';
 // Register `commentList` component, along with its associated controller and template
angular.
  module('commentList').
  component('commentList', {
    templateUrl: '/app/comment-list/comment-list.template.html',
    controller: ['$http', '$routeParams',
      function CommentListController($http, $routeParams) {
        var self = this;
        self.orderProp = 'id';

        $http.get('app/posts/' + $routeParams.commentId + '.json').then(function(response) {
          self.comments = response.data;
        });
      }
    ]
  });
