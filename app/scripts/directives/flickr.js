'use strict';

/**
 * @ngdoc directive
 * @name fedexerciseApp.directive:flickr
 * @description
 * # flickr
 */
angular.module('fedexerciseApp')
  .directive('flickr', function () {
    return {
      templateUrl: 'views/flickr.html',
      restrict: 'E'
    };
  });
