'use strict';

var Array = require('../lib/modify_array_functions');

var expect = require('chai').expect;

var arr = [1, 2, 3, 4, 5];


describe("SelfImplemented functions test", function() {
  
  it("should add element to the end of the array and return new length", function() {
    expect(6).to.eql(arr.myPush(6));
  });
  
  it("should delete last element from the array and return this value", function() {
    expect(6).to.eql(arr.myPop());
  });

  it("should delete first element from the array and return new length", function() {
    expect(1).to.eql(arr.myShift());
  });

  it("should add the element to the array and return its value", function() {
    expect(5).to.eql(arr.myUnshift(100));
  });

});
