'use strict';

function unique(array) {
	
	var newArray = [];
	newArray[0] = array[0];
	
	for (var i = 1; i < array.length; i++) {
		if (!isExist(newArray, array[i])) {
			newArray.push(array[i]);
		}
	}

	function isExist(array, value) {
		for(var i = 0; i < array.length; i++) {
			if (array[i] == value) {
				return true;
			}
		}
		return false;
	}

	return newArray;
}

module.exports = unique;


var a = [1, 7, 7, 2, 3, 4, 5, 4, 3, 7];

var b = unique(a);

console.log(b);