'use strict';

function frequency2(array){

	var dictionary = {};
	var max = 0;
	var maxLetter = '';
	for (var i = 97; i < 123; i++) {
		dictionary[String.fromCharCode(i)] = 0; 
	}
	
	for(var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			dictionary[array[i][j]] += 1;
			if(dictionary[array[i][j]] > max) {
				max = dictionary[array[i][j]];
				maxLetter = array[i][j];
			}
		}
	}

	return maxLetter;
}

module.exports = frequency2;