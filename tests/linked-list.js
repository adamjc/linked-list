var chai = require('chai');
var should = chai.should();
var LinkedList = require('../src/linked-list');

describe('linked-list', function () {
    var linkedList;
    var testObject;

    beforeEach(function () {
        linkedList = new LinkedList();

        testObject = {
            text: 'foo',
            value: '1'
        };

        testObjectTwo = {
            text: 'bar',
            value: '2'
        };
    })

    it('should be able to append an element', function () {
        linkedList.addLast(testObject).should.equal(true);
        linkedList.addLast(testObjectTwo);
        linkedList.getFirst().should.equal(testObject);
    });

    it('should be able to prepend an element', function () {
        linkedList.addLast(testObject);
        linkedList.addFirst(testObjectTwo);
        linkedList.getFirst().should.equal(testObjectTwo);
    });

    it('should be able to tell the size of the list', function () {
        linkedList.size().should.equal(0);
        linkedList.addLast(testObject);
        linkedList.size().should.equal(1);
    });

    it('should be able to get the last element in the list', function () {
        linkedList.addLast(testObject);
        linkedList.addLast(testObjectTwo);
        linkedList.getLast().should.equal(testObjectTwo);
        linkedList.addLast(testObject);
        linkedList.getLast().should.equal(testObject);
    });

    it('should be able to remove the first element', function () {
        linkedList.addFirst(testObject);
        linkedList.addFirst(testObjectTwo);
        linkedList.removeFirst();
        linkedList.getFirst().should.equal(testObject);
    });

    it('should be able to remove the last element', function () {
        linkedList.addFirst(testObject);
        linkedList.addFirst(testObjectTwo);
        linkedList.removeLast();
        linkedList.getLast().should.equal(testObject);
    });
});
