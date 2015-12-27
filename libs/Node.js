/**
 * @param {mixed} value data associated with Node
 */
function Node(value) {
	this.value = value;
}

Node.prototype = {
	next: null,
	prev: null,
	value: null
}

module.exports = Node;
