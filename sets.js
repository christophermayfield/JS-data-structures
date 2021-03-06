/* Sets */
//A set is a collection of non-repeating elements
//In ES6, sets are included, and the methods we have will be included in those as well
//with the exception of Size, its a property not a method
//as well as add, its called something else, look into that

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
    };
    
    //these methods down here are not included in the ES6 implementation of Sets, but are an important aspect of sets. 
    
    //this method will return the union of the two sets
    this.union = function(otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        
        secondSet.forEach(function(e){
            unionSet.add(e); //.add() does not add any duplicates so we have that problem solved
        })
        
        return unionSet;    
        
    };
    //this method will return the intersection of two sets as a new set.
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
           if(otherSet.has(e)){
               intersectionSet.add(e);
           } 
        });
        return intersectionSet;
    };
    
    //this method will return the difference of two sets as a new set. 
    this.difference = function(otherSet) {
        var differenceSet = new mySet();
        var firstSet = this.values();
        
        firstSet.for(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            };
        });
       return differenceSet; 
    };
    
    //this method will test if the set is a subset of a different set
    this.subset = function(otherSet){
      var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
            //the above code will check if the values in the first set are also in the second set
        });
                             
    };

} //endset

const setA = new mySet();
const setB = new mySet();
setA.add('a');
setA.add('b');
setA.add('c');
setA.add('d');
setA.add('a');
setA.add('d');

console.log(setA.subset(setB));
var setC = new Set();
var setD = new Set();


