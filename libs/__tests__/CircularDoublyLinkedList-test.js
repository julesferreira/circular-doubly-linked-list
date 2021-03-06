jest.dontMock('../CircularDoublyLinkedList.js');
jest.dontMock('../Node.js');

describe('CircularDoublyLinkedList', function() {

	var List = require('../CircularDoublyLinkedList');
	var Node = require('../Node');

	describe('constructor', function() {
		it('creates a new (empty) list', function() {
			var list = new List();
			expect(list.head).toBeNull();
			expect(list.n).toBe(0);
		});
	});

	describe('insert', function() {
		var node1 = null;
		var node2 = null;
		var node3 = null;
		var list = new List();

		it('adds a Node to empty list', function() {
			node1 = list.insert(1);
			expect(list.head.value).toBe(1);
			expect(list.head.next).toBe(list.head);
			expect(list.head.prev).toBe(list.head);
			expect(list.n).toBe(1);
		});

		it('adds a Node to end of list', function() {
			node2 = list.insert(2);
			var node = list.head.next;
			expect(node.value).toBe(2);
			expect(node.next).toBe(list.head);
			expect(node.prev).toBe(list.head);
			expect(list.n).toBe(2);
		});

		it('links Node between last and first', function() {
			node3 = list.insert(3);
			var node = list.head.next;
			expect(node.value).toBe(2);
			expect(node.next).toBe(node3);
			expect(node.prev).toBe(node1);
			var node = node.next;
			expect(node.value).toBe(3);
			expect(node.next).toBe(node1);
			expect(node.prev).toBe(node2);
			expect(list.n).toBe(3);
		});
	});

	describe('remove', function() {
		var list = new List();
		var node1 = list.insert(1);
		var node2 = list.insert(2);
		var node3 = list.insert(3);

		it('removes a node from list', function() {
			list.remove(node2);
			expect(list.head.value).toBe(1);
			expect(list.head.next).toBe(node3);
			expect(list.head.prev).toBe(node3);
			expect(list.n).toBe(2);
		});

		it('removes a head node (head.next becomes new head)', function() {
			list.remove(node1);
			expect(list.head.value).toBe(3);
			expect(list.head.next).toBe(node3);
			expect(list.head.prev).toBe(node3);
			expect(list.n).toBe(1);
		});

		it('removes a final node', function() {
			list.remove(node3);
			expect(list.head).toBeNull();
			expect(list.n).toBe(0);
		});
	});
});

