'use strict';

var app = angular.module('fedexerciseApp');

/**
 * @ngdoc directive
 * @name fedexerciseApp.directive:flickr
 * @description
 * # flickr
 */
app
  .controller('flickrCRTL', function($scope, $http) {
  	$http.get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1', { cache: true }).success(function(data) {
      $scope.photos = data.photos.photo;
    });

    $scope.clearfix = function(photoIndex) {
      if ((photoIndex % 3) === 2) {
        return 'visible-lg-block visible-md-block clearfix';
      } else if ((photoIndex % 2) === 1) {
        return 'visible-sm-block clearfix';
      }

      return '';
    };
  })
  .directive('flickr', function () {
    return {
      templateUrl: 'views/flickr.html',
      restrict: 'E'
    };
  });
