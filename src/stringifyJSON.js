// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if (typeof obj === 'string') {
  	return '"' + obj + '"';

  } else if (obj === undefined || typeof obj === 'function') {
  	return undefined;

  } else if (obj === null || obj === Infinity || obj === NaN) {
  	return String(null);

  } else if (typeof obj === 'boolean') {
  	return obj.toString();

  } else if (typeof obj === 'number') {
  	return obj.toString();

  } else if (Array.isArray(obj)) {
  	var array = [];
  	obj.forEach(function(element) {
    	if (typeof element !== 'function' && typeof element !== 'symbol' && typeof element !== 'undefined') {
    		array.push(stringifyJSON(element));
  		} else {
  			array.push(null);    		
      }
    });
  	return '[' + array.join(',') + ']';

  } else if (typeof obj === 'object') {
  	var array = [];
  	for (key in obj) {
  		if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function' && typeof obj[key] !== 'symbol') {
  			array.push('"' + key.toString() + '":' + stringifyJSON(obj[key]));
  		}
  	}
  	return '{' + array.join(',') + '}';
  } 
};
