/* Sets */
//A set is a collection of non-repeating elements

function mySet(){
    //the collection will hold the set
    var collection = [];
    
    //this method will check for the presence of values and return true or false.
    this.has = function(element){
        return (collection.indexOf(element)!== -1);
    }
    
    //this method will return the values in the set
    this.values = function(){
        return collection;
    }

//this method will add an elemetn to the set 
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

};


