/* Binary Search Tree */ 

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    
}


class BST {
    constructor(){
        this.root = null;
        
    }
}


add(data){
    const node = this.root;

    if(node === null) {
        this.root = new Node(data);
        return;
    } else {
        const searchTree = function(node){
            if(data < node.data){
                if(node.left === null){
                    node.left = new Node(data);
                    return;
                } else if (node.left !== null) {
                    return searchTree(node.left);
                }
            } else if(data > node.data) {
                if(node.right === null) {
                    node.right = new Node(data);
                    return;
                } else if (node.right !== null) {
                    return searchTree(node.right);
                }
            } else {
                return null;
            }
        };
        return searchTree(node); //how we call the function (initially)
    }
}

findMin(){
    let current = this.root;
    while(current.left !== null){
        current = current.left;
    }
    return current.left;
}

findMax() {
    let current = this.root;
    while(current.right !== null) {
        current = current.right;
    }
    return current.right;
}

find(data){
    let current = this.root;
    while(current.data !== data) {
        if(data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        if(curent === data) {
            return null;
        }
    }
    return current;
}

isPresent(data){
    let current = this.root;
}