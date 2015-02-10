var LinkedList = (function () {
    function Node(previous, next, value) {
        this.previous = previous;
        this.next = next;
        this.value = value;
    }

    function LinkedList() {
        var nodes = [];
        var firstNode;
        var lastNode;

        this.addFirst = function (element) {
            var nextNode;

            if (firstNode !== undefined) {
                nextNode = firstNode;
            }

            var newNode = new Node(undefined, nextNode, element);

            nodes.push(newNode);

            if (firstNode !== undefined) {
                firstNode.previous = newNode;
            }

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

            if (lastNode !== undefined) {
                lastNode.next = newNode;
            }

            lastNode = newNode;

            if (firstNode === undefined) {
                firstNode = lastNode;
            }

            return true;
        };

        this.removeFirst = function (element) {
            var nextNode;
            var firstNodeIndex;

            if (firstNode !== undefined) {
                nextNode = firstNode.next;
                firstNodeIndex = nodes.indexOf(firstNode);
                nodes.splice(firstNodeIndex, 1);
                firstNode = nextNode;

                return true;
            }

            return false;
        };

        this.removeLast = function (element) {
            var previousNode;
            var lastNodeIndex;

            if (lastNode !== undefined) {
                previousNode = lastNode.previous;
                lastNodeIndex = nodes.indexOf(lastNode);
                nodes.splice(lastNodeIndex, 1);
                lastNode = previousNode;

                return true;
            }

            return false;
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
