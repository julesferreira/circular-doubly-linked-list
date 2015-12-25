jest.dontMock('../CircularDoublyLinkedList.js');

describe('make list', function() {
	it('creates a new (empty) list', function() {
		var List = require('../CircularDoublyLinkedList');
		var list = new List();
		expect(list.head).toBeNull();
	});
});
