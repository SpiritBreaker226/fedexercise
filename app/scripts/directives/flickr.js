'use strict';

var app = angular.module('fedexerciseApp');

/**
 * @ngdoc directive
 * @name fedexerciseApp.directive:flickr
 * @description
 * # flickr
 */
app
  .controller('flickrCrtl', function($scope, flickrFactory) {
    flickrFactory.callFlickrFunctions('flickr.people.getPublicPhotos').success(function(data) {
      $scope.photos = data.photos.photo;
    });

    $scope.photoOrder = 'title';

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
