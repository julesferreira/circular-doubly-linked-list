jest.dontMock('../CircularDoublyLinkedList.js');
jest.dontMock('../Node.js');

describe('CircularDoublyLinkedList', function() {

	var List = require('../CircularDoublyLinkedList');
	var Node = require('../Node');
	var list = null;

	describe('constructor', function() {
		it('creates a new (empty) list', function() {
			list = new List();
			expect(list.head).toBeNull();
			expect(list.n).toBe(0);
		});
	});

	describe('insert', function() {
		var node1 = new Node(1);
		var node2 = new Node(2);
		var node3 = new Node(3);

		it('adds a Node to empty list', function() {
			list.insert(node1);
			expect(list.head.value).toBe(1);
			expect(list.head.next).toBe(list.head);
			expect(list.head.prev).toBe(list.head);
			expect(list.n).toBe(1);
		});

		it('adds a Node to end of list', function() {
			list.insert(node2);
			var node = list.head.next;
			expect(node.value).toBe(2);
			expect(node.next).toBe(list.head);
			expect(node.prev).toBe(list.head);
			expect(list.n).toBe(2);
		});

		it('links Node between last and first', function() {
			list.insert(node3);
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
});

