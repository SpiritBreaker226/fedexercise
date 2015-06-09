'use strict';

/**
 * @ngdoc service
 * @name fedexerciseApp.flickrFactory
 * @description
 * # flickrFactory
 * Factory in the fedexerciseApp.
 */
angular.module('fedexerciseApp')
  .factory('flickrFactory', function($http) {
    var apiKey = 'a5e95177da353f58113fd60296e1d250';
    var userId = '132365033@N08';
    var baseURI = 'https://api.flickr.com/services/rest/';
    
    return {
      callFlickrFunctions: function (flickrMethod, flickrMethodArguments) {
        var extraUrlMethodArguments = '';

        for(var flickrMethodArgName in flickrMethodArguments) {
          extraUrlMethodArguments += '&' + flickrMethodArgName + '=' + flickrMethodArguments[flickrMethodArgName];
        }

        return $http.get(baseURI + 
          '?method=' + flickrMethod + 
          '&api_key=' + apiKey + 
          '&user_id=' + userId + 
          '&format=json' + 
          '&nojsoncallback=1' +
          extraUrlMethodArguments, { 
            cache: true 
          });
      }
    };
  });
