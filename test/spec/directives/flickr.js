'use strict';

describe('Directive: flickr', function () {

  // load the directive's module
  beforeEach(module('fedexerciseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flickr></flickr>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flickr directive');
  }));
});
