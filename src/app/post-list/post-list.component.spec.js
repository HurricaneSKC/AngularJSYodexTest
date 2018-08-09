// unit test

'use strict';

describe('postList', function() {

// Load the module that contains the `postList` component before each test
beforeEach(module('postList'));

// Test the controller
describe('MyPostController', function() {
    var $httpBackend, ctrl;
// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
// This allows us to inject a service and assign it to a variable with the same name
// as the service while avoiding a name conflict.
beforeEach(inject(function($componentController, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('posts/pposts.json')
                .respond([{title: 'eum et est occaecati'}, {title: 'nesciunt quas odio'}]);

    ctrl = $componentController('postList');
    }));

    it('should create a `posts` property with 2 posts fetched with `$http`', function() {
        expect(ctrl.posts).toBeUndefined();

        $httpBackend.flush();
        expect(ctrl.posts).toEqual([{name: 'eum et est occaecati'}, {name: 'nesciunt quas odio'}]);
    });
    it('should set a default value for the `orderProp` property', function() {
        expect(ctrl.orderProp).toBe('userId');
    });
