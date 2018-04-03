// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
//You should use document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
	var body = document.body;
	var elementsFound = [];

	function traverseDOM(node) {
		if (node.nodeValue === null && node.childNodes) {
			var children = node.childNodes;
			if (node.classList.contains(className)) {
				elementsFound.push(node);
			}
			for (var i = 0; i < children.length; i++) {
				traverseDOM(children[i]);
			}
		} else if (node.nodeValue === null && node.classList.contains(className)) {
				elementsFound.push(node);
		}
	}

	traverseDOM(body);
	return elementsFound;
}