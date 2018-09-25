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
            node.setEnd();
            return;
        } else if (!node.keys.has(input[0])){
            node.keys.set(input[0], new Node());
            return this.add(input.substr(1), node.keys.get(input[0]));
        } else {
            return this.add(input.substr(1), node.keys.get(input[0]));
        };
    };
    
    this.isWord = function(word) {
        let node = this.root;
        while(word.length > 1) {
            if(!node.keys.has(word[0])) {
                return false;
            } else {
                node = node.keys.get(word[0]);
                word = word.substr(1);
            }
        }
        return (node.keys.has(word) && node.keys.get(word).isEnd())? true: false;
    }
    
} //end Trie