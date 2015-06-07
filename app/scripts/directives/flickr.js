'use strict';

var app = angular.module('fedexerciseApp');

/**
 * @ngdoc directive
 * @name fedexerciseApp.directive:flickr
 * @description
 * # flickr
 */
app
  .controller('flickrCRTL', function() {
  })
  .directive('flickr', function () {
    return {
      templateUrl: 'views/flickr.html',
      restrict: 'E'
    };
  });
