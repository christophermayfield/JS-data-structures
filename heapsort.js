//heap sort algorithim 


//max heap class
class MaxHeap {
    constructor(){
        this.heap = [];
    }

    parentIndex(index){
        return Math.floor((index-1)/2);
    }

    leftChildIndex(index){
        return (2*index + 1);
    }

    rightChildIndex(index){
        return (2*index + 2);
    }

    swap(a,b) {
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    insert(item) {
        this.heap.push(item);
        var index = this.heap.length - 1;
        var parent = this.parentIndex(index);

        while(this.heap[parent] && this.heap[parent] < this.heap[index]) {
                this.swap(parent,index);
                index = this.parentIndex(index);
                parent = this.parentIndex(index);
        }
    }

    delete(){

    }

}

//max heap function below