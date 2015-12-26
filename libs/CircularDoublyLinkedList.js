function CircularDoublyLinkedList() {}

CircularDoublyLinkedList.prototype = {
	/**
	 * @type {Node}
	 */
	head: null,

	/**
	 * @type {Number} list count
	 */
	n: 0,

	/**
	 * insert node at 'end' of list (after most recently added node, before first)
	 *
	 * @param {Node} node
	 */
	insert: function(node) {
		if (this.head === null) {
			this.head = node.next = node.prev = node;
		} else {
			node.next = this.head;
			node.prev = this.head.prev;
			this.head.prev.next = node;
			this.head.prev = node;
		}
		this.n++;
	}
}

module.exports = CircularDoublyLinkedList;
