'use strict';

describe('Service: flickrFactory', function () {
  var flickrFactory;
  var httpBackend;

  // load the service's module
  beforeEach(function() {
    module('fedexerciseApp');

    // get your service, also get $httpBackend
    // $httpBackend will be a mock, thanks to angular-mocks.js
    inject(function ($httpBackend, _flickrFactory_) {
      flickrFactory = _flickrFactory_;
      httpBackend = $httpBackend;
    });
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('should return 200 and response with list of photos', function() {
    // set up some data for the http call to return and test later.
    var returnData = {
      photos: {
        page: 1,
        pages: 1,
        perpage: 100,
        total: "12",
        photo: [
          {
            id: "17936160485",
            owner: "132365033@N08",
            server: "7738",
            farm: 8,
            title: "rhino",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
          },
          {
            id: "17936788061",
            owner: "132365033@N08",
            server: "7761",
            farm: 8,
            title: "gharial",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0
          }
        ]
      }
    };

    // expectGET to make sure this is called once.
    httpBackend.expectGET('https://api.flickr.com/services/rest/' + 
      '?method=flickr.people.getPublicPhotos' + 
      '&api_key=a5e95177da353f58113fd60296e1d250' + 
      '&user_id=132365033@N08' + 
      '&format=json' + 
      '&nojsoncallback=1'
    ).respond(returnData);
    
    // make the call.
    var returnedPromise = flickrFactory.callFlickrFunctions('flickr.people.getPublicPhotos');
    
    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });
    
    // flush the backend to "execute" the request to do the expectedGET assertion.
    httpBackend.flush();
    
    // check the result. 
    expect(result).toEqual(returnData);
  });
});
