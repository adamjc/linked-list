# linked-list
Linked lists in JavaScript. Internally uses an array to store the previous node, next node and element.

## Testing
```
npm install
npm test
```

require into your project as you want, yo.

## Usage

### addFirst(element)

Adds the element passed through to the start of the linked list.

### addLast(element)

Adds the element passed through to the end of the linked list.

### removeFirst()

Removes and returns the first element from the linked list.

### removeLast()

Removes and returns the last element from the linked list.

### getFirst()

Returns the first element in the linked list.

### getLast()

Returns the last element in the linked list.

### size()

Returns how many elements are in the linked list.

## Examples

Assume all states carry on from each other...

### Setup

`var linkedList = new LinkedList();`

### Adding an item to the linked list
```
var testObject = {
  text: 'foo',
  value: 1
};

linkedList.addFirst(testObject);
```
