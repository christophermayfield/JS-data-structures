/* Linked List */ 

fucntion LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element) {
        this.element = element; //the thing that the list is going to have
        this.next = null; //the link to the next node. 
    }
    this.size = function() { //returns our length. 
        return length;
    }

    this.head = function() { //returns the head of the linked list.
        return head;
    }

    this.add = function() {
        var node = new Node();
        if(head === null) {
            head = node;
        } else {
            var currentNode = head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        length++;
    };
    
    this.remove = function(element) {
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element) {
            head = currentNode.next; //pointing to the next node 
        } else {
            while(currentNode.element != element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next; //this is how we remove a node from the linked list. 
        }
        length--; //reduces the length by one. 
    }
    
    
    this.isEmpty = function() {
        return length ==== 0;
    }
    
};