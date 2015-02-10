var LinkedList = (function () {
    function Node(previous, next, value) {
        this.previous = previous;
        this.next = next;
        this.value = value;
    }

    function LinkedList() {
        var nodes = [];
        var firstNode = undefined;
        var lastNode = undefined;

        this.addFirst = function (element) {
            var nextNode;

            if (firstNode !== undefined) {
                nextNode = firstNode;
            }

            var newNode = new Node(undefined, nextNode, element);

            nodes.push(newNode);

            firstNode = newNode;

            if (lastNode === undefined) {
                lastNode = firstNode;
            }

            return true;
        };

        this.addLast = function (element) {
            var previousNode;

            if (lastNode !== undefined) {
                previousNode = lastNode;
            }

            var newNode = new Node(previousNode, undefined, element);

            nodes.push(newNode);

            lastNode = newNode;

            if (firstNode === undefined) {
                firstNode = lastNode;
            }

            return true;
        };

        this.removeFirst = function (element) {
            var firstNode = nodes[firstIndex];

            nodes.splice(firstIndex, 1);

            firstIndex = firstNode.next;
        };

        this.removeLast = function (element) {
            var lastNode = nodes[lastIndex];

            nodes.splice(lastIndex, 1);

            lastIndex = lastNode.previous;
        };

        this.getFirst = function () {
            if (firstNode !== undefined) {
                return firstNode.value;
            } else {
                return undefined;
            }
        };

        this.getLast = function () {
            if (lastNode !== undefined) {
                return lastNode.value;
            } else {
                return lastNode;
            }
        };

        this.size = function () {
            return nodes.length;
        };
    }

    return LinkedList;
}());

module.exports = LinkedList;
