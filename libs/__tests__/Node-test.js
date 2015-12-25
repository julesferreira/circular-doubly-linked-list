jest.dontMock('../Node.js');

describe('make node', function() {
	it('creates a new node', function() {
		var Node = require('../Node');
		var node = new Node('value');
		expect(node.next).toBeNull();
		expect(node.prev).toBeNull();
		expect(node.value).toBe('value');
	});
});
