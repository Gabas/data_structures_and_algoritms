'use strict';

Array.prototype.myPush = function(value) {
	for ( var i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];	
	}
	return this.length;
}

Array.prototype.myPop = function() {
	var lastValue = this[this.length - 1];
	this.length -= 1;
	return lastValue;
}

Array.prototype.myShift = function() {
	var firstElement = this[0];
	for (var i = 0; i < this.length - 1; i++) {
		this[i] = this[i+1];
	}
	this.length -= 1;
	return firstElement;
}

Array.prototype.myUnshift = function(value) {
	for(var i = this.length; i > 0; i--) {
		this[i] = this[i-1];
	}
	this[0] = value;
	return this.length;
}