/* Trie Data Structure */ 
/*Notes: 
A trie is a special type of tree. A trie stores data in steps each step is a node in the trie, this is often used to store words */ 
let Node = function() {
    this.keys = new Map(); //ES6 structure, its like an object wtih key/value pairs
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    };
    this.isEnd = function() {
        return this.end;
    };
};

let Trie = function() {
    
    this.root = new Node();
    
    this.add = function(input, node = this.root) {
        if(input.length == 0) {
            
        }
    }
    
} //end Trie