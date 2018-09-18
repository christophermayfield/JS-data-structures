/* Sets */
//A set is a collection of non-repeating elements
//In ES6, sets are included, and the methods we have will be included in those as well
//with the exception of Size, its a property not a method
//as well as add, its called something else, look into it
function mySet(){
    //the collection will hold the set
    var collection = [];
    
    //this method will check for the presence of values and return true or false.
    this.has = function(element){
        return (collection.indexOf(element)!== -1);
    };
    
    //this method will return the values in the set
    this.values = function(){
        return collection;
    };


    //this method will add an element to the set 
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        //else condition
        return false;
    };

    //this method will remove an element from the list 
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element)
            collection.splice(index,1);
            return true;
        }
        return false;
    }
    
    //these methods down here are not included in the ES6 implementation of Sets, but are an important aspect of sets. 
    
    //this method will return the union of the two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        
        secondSet.forEach(function(e){
            unionSet.add(e);
        })
        
        return unionSet;    
        
    };



}; //endset


