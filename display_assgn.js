class SLLNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    
    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    frontValue() {
        if (!this.head) {
            return null;
        } else {
            return this.head.value;
        }    
    }    

    // Remove node from front of the list
    removeFront() {
        if (!this.head) {
            return this.head;
        }            
        // hold removed
        var holdRemovedNode = this.head;
        this.head = holdRemovedNode.next;
        holdRemovedNode.next = null;
        return this.head;
    }            

    // assignment for display method
    display() {
        var listValues = "";
        if (!this.head) {
            return "";
        }
        listValues += this.head.value;
        // For the second node onwards, we'll add ", " + value;
        var runner = this.head.next;
        while (runner != null) {
            listValues += ", " + runner.value;
            runner = runner.next;
            return listValues;
        }
    }
}
