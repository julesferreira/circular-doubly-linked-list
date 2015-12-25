/**
 * @param {mixed} value data associated with Node
 */
function Node(value) {
	this.value = value;
}

Node.prototype = {
	next: null,
	prev: null
}

module.exports = Node;
