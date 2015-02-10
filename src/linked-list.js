var LinkedList = (function () {
    function Node(previous, next, value) {
        this.previous = previous;
        this.next = next;
        this.value = value;
    }

    function LinkedList() {
        var nodes = [];
        var firstIndex = 0;
        var lastIndex = 0;

        this.addFirst = function (element) {
            var newNode = new Node(undefined, firstIndex, element);

            nodes.push(newNode);

            firstIndex = nodes.length - 1;
        };

        this.addLast = function (element) {
            var previousNode = this.getLast();

            var newNode = new Node(lastIndex, undefined, element);

            nodes.push(newNode);

            lastIndex = nodes.length - 1;

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
            var firstNode = nodes[firstIndex];

            if (firstNode !== undefined) {
                return firstNode.value;
            } else {
                return undefined;
            }
        };

        this.getLast = function () {
            var lastNode = nodes[lastIndex];

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
