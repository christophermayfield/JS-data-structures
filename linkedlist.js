/* Linked List */ 
/* how it works, learn it more */

/* this is a linkedList function */ 

fucntion LinkedList() {
    var length = 0;
    var head = null;
    
    /* a node */ 

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
    
    //removes an element 
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
    };
    
    this.indexOf = function(element) {
        var currentNode = head;
        var index = -1;
        while(currentNode) {
            index++;
            if(currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    }; 
    
    this.elementAt = function(index) {
        var currentNode = head; //starting at the beginning
        var count = 0;
        
        while(count < index) { //means we haven't gotten to the index we are searching for.
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };
    
    //allows us to add anywhere in the linked list, not just the start
    this.addAt = function(index, element) {
        var node = new Node(element);
        var currentNode = head; //starting at the beginning
        var previousNode;
        var currentIndex = 0;
        
        if(index > length) {
            return false;
        }
        
        if(index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    };
    
    this.removeAt = function(index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        
        if(index < 0 || index >= length) {
            return null;
        }
        
        if(index === 0 ) {
            head = currentNode.next; //shifting the head pointer
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }


}; //end LinkedList function

//running code for linked list
var conda = new LinkedList();
conda.add("Kitten");
conda.add("Puppy");
conda.add("Dog");
conda.add("Cat");
console.log(conda.removeAt(3));