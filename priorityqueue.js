//Priority Queue
//Elements with a higher priority are sent to the front of the queue.
//If they're the same priority, they will come according to when they're pushed into the array. 

function PriorityQueue(){
    var collection = [];
    this.printCollection = function(){
        console.log(collection);  
    };
    
    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        }  else {
            var added = false;
            for(var i = 0; i < collection.length; i++){
                if(element[i] < collection[i][1]) {
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if(!added){
            collection.push(element);
            }
        }
        
    };
    
    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    };
    
    this.front = function(){
        return collection[0];
    };
    
    this.size = function(){
        return collection.length;
    };   
    
    this.isEmpty = function(){
        return (collection.length === 0);
    };
}

var pq = new PriorityQueue();
pq.enqueue(["chris mayfield", 2]);
pq.enqueue(['Karina Robledo',3]);
pq.enqueue(['Ian Goodfellow', 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();