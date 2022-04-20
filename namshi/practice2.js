// ✘ '\x1b[31m%s\x1b[0m'✔
const assert = require('assert')

class Node {
    constructor(value = null) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertNode(value) {
        if (!this.head) {
            this.head = new Node(value)
            return value
        }
        let ptr = this.head
        while (ptr.next) {
            ptr = ptr.next
        }
        ptr.next = new Node(value)
        return
    }

    reverseLinkedList() {
        this.reverse(this.head)
    }

    reverse() {
        let current = this.head,
            prev,
            next
        while (current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

    printLinkedList() {
        let ptr = this.head
        if (!ptr) console.log('Linked List is empty')
        while (ptr) {
            process.stdout.write(ptr.value + '  -> ')
            ptr = ptr.next
        }
        console.log('null')
    }
}

const main = () => {
    try {
        let ll = new LinkedList()
        ll.insertNode(3)
        ll.insertNode(4)
        ll.insertNode(5)
        ll.printLinkedList()
        ll.reverse()
        ll.printLinkedList()
        /** Execute Test Cases */

        // testResult(4, 5, 1)
    } catch (error) {
        // to catch syntax related errors
        console.log(error.message)
    }
}

const testResult = (actual, expected, id) => {
    try {
        assert.deepEqual(actual, expected, `Test Case ${id} Failed`)
        console.log('\x1b[36m%s\x1b[0m', `Test Case ${id} Passed`)
    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', error.message)
    }
}

main()
