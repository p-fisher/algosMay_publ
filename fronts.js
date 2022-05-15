// Add front =========================
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.


class SLL {
    // constructor, other methods, removed for brevity
    addFront(value) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
}


// Remove front =========================
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.


class SLL {
    // constructor, other methods, removed for brevity
    removeFront() {
        if(!this.length) return null;
        if(this.head) {
            this.head = null;
            return this;
        }
        this.head = this.head.next;
        this.length--;
        return this;
    }
}


// Front value =========================
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.


class SLL {
    // constructor, other methods, removed for brevity
    front() {
        if(!this.length) return null;
        // return this.head.value;
        var current = this.head;
        return current.value;
    }
}
