
exports.min = function min (array) {
  if(array !== undefined && array.length > 0) {
 		return Math.min(...array);
	} else {
		return 0;
	}
}

exports.max = function max (array) {
  if(array !== undefined && array.length > 0) {
 		return Math.max(...array);
	} else {
		return 0;
	}
}

exports.avg = function avg (array) {
	if(array !== undefined && array.length > 0) {
		let sum = array.reduce((a, b) => a + b, 0);
		let result = sum / array.length;

 		return result
	} else {
		return 0;
	}
}
