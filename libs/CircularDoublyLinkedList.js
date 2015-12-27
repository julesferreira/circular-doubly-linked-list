var Node = require('./Node');

function CircularDoublyLinkedList() {}

CircularDoublyLinkedList.prototype = {
	/**
	 * @type {Node}
	 */
	head: null,

	/**
	 * @type {number} list count
	 */
	n: 0,

	/**
	 * insert node at 'end' of list (after most recently added node, before first)
	 *
	 * @param {mixed} value
	 * @return {Node}
	 */
	insert: function(value) {
		var node = new Node(value);
		if (this.head === null) {
			this.head = node.next = node.prev = node;
		} else {
			node.next = this.head;
			node.prev = this.head.prev;
			this.head.prev.next = node;
			this.head.prev = node;
		}
		this.n++;
		return node;
	},

	/**
	 * remove node
	 *
	 * @param {Node} node
	 */
	remove: function(node) {
		if (node.next === node) {
			this.head = null;
		} else {
			node.next.prev = node.prev;
			node.prev.next = node.next;
			if (node === this.head) {
				this.head = node.next;
			}
		}
		this.n--;
	}
}

module.exports = CircularDoublyLinkedList;
